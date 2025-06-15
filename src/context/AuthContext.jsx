const login = async (username, password) => {
  const response = await api.post('/token/', { username, password });
  const { access, refresh } = response.data;

  const tokens = { access, refresh };
  setAuthTokens(tokens);
  localStorage.setItem('authTokens', JSON.stringify(tokens));
  // ... остальной код ...
}; 