import { useState, useCallback, useEffect } from 'react';
import { useApiStore } from '../stores/api.store.js';
import { setAuthToken, getAuthToken, clearAuthToken } from '../services/api.service.js';

export const useAuthContext = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { post } = useApiStore();

  // Check if token exists on mount
  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = useCallback(
    async (email, password) => {
      setLoading(true);
      try {
        const response = await post('/auth/login', { email, password });
        const token = response.token;
        setAuthToken(token);
        setUser(response.user);
        setIsAuthenticated(true);
        return response;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [post]
  );

  const logout = useCallback(() => {
    clearAuthToken();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };
};
