import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import jwt_decode from 'jwt-decode';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const stored = localStorage.getItem('authTokens');
    return stored ? JSON.parse(stored) : null;
  });

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

  const login = async (username, password) => {
    try {
      const response = await api.post('/token/', { username, password });
      const { access, refresh } = response.data;

      const tokens = { access, refresh };
      setAuthTokens(tokens);
      localStorage.setItem('authTokens', JSON.stringify(tokens));

      const decoded = jwt_decode(access);
      setUser(decoded);
    } catch (err) {
      console.error('❌ Login failed:', err);
      throw err;
    }
  };

  const logout = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
  }, []);

  const refreshToken = useCallback(async () => {
    if (!authTokens?.refresh) return;

    try {
      const response = await api.post('/token/refresh/', {
        refresh: authTokens.refresh,
      });
      const access = response.data.access;

      const updated = { ...authTokens, access };
      setAuthTokens(updated);
      localStorage.setItem('authTokens', JSON.stringify(updated));

      const decoded = jwt_decode(access);
      setUser(decoded);
    } catch (err) {
      console.warn('⚠️ Token refresh failed, logging out...');
      logout();
    }
  }, [authTokens, logout]);

  useEffect(() => {
    if (authTokens) {
      const interval = setInterval(() => {
        refreshToken();
      }, 1000 * 60 * 4); // каждые 4 минуты
      return () => clearInterval(interval);
    }
  }, [authTokens, refreshToken]);

  const contextData = {
    user,
    login,
    logout,
    authTokens,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
