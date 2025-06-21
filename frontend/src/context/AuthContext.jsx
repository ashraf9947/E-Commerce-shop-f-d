import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Загружаем токены из localStorage (если есть)
  const [authTokens, setAuthTokens] = useState(() => {
    const stored = localStorage.getItem('authTokens');
    return stored ? JSON.parse(stored) : null;
  });

  // Декодируем пользователя из access-токена
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('authTokens');
      if (stored) {
        return jwt_decode(JSON.parse(stored).access);
      }
      return null;
    } catch (error) {
      console.error('❌ Failed to decode access token from localStorage');
      return null;
    }
  });

  // Функция входа в систему (получаем токены, сохраняем в state и localStorage)
  const login = async (username, password) => {
    try {
      const response = await api.post('/token/', { username, password });
      const tokens = response.data;

      setAuthTokens(tokens); // Сохраняем токены в state
      localStorage.setItem('authTokens', JSON.stringify(tokens)); // Сохраняем токены в localStorage
      setUser(jwt_decode(tokens.access)); // Декодируем и сохраняем пользователя

      navigate('/'); // После логина перенаправляем на главную страницу
    } catch (err) {
      logout(); // Очистка данных при ошибке
      throw err;
    }
  };

  // Функция выхода из системы
  const logout = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens'); // Удаляем токены из localStorage
    navigate('/login'); // Перенаправляем на страницу входа
  }, [navigate]);

  // Функция обновления токена по refresh-токену
  const refreshToken = useCallback(async () => {
    if (!authTokens?.refresh) return;

    try {
      const response = await api.post('/token/refresh/', {
        refresh: authTokens.refresh,
      });

      const newTokens = { ...authTokens, access: response.data.access };
      setAuthTokens(newTokens); // Обновляем токены в state
      localStorage.setItem('authTokens', JSON.stringify(newTokens)); // Сохраняем обновленные токены в localStorage

      const decoded = jwt_decode(response.data.access);
      setUser(decoded); // Декодируем новый access-токен
    } catch (err) {
      console.warn(' Token refresh failed. Logging out...');
      logout(); // Если обновление токена не удалось — выходим
    }
  }, [authTokens, logout]);

  // useEffect для обновления токена каждые 4 минуты
  useEffect(() => {
    if (authTokens) {
      const interval = setInterval(refreshToken, 1000 * 60 * 4); // каждые 4 минуты
      return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }
  }, [authTokens, refreshToken]);

  const contextData = {
    user,
    login,
    logout,
    authTokens,
    isAuthenticated: !!user, // Проверка, авторизован ли пользователь
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
