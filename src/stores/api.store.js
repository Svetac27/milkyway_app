import { useCallback, useState } from 'react';
import apiClient, { API_BASE_URL, checkApiConnection } from '../services/api.service';

export const useApiStore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const request = useCallback(async (config) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient(config);
      setData(response.data);
      return response.data;
    } catch (requestError) {
      setError(requestError);
      throw requestError;
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback((url, config = {}) => request({ method: 'get', url, ...config }), [request]);

  const post = useCallback(
    (url, payload, config = {}) => request({ method: 'post', url, data: payload, ...config }),
    [request]
  );

  const put = useCallback(
    (url, payload, config = {}) => request({ method: 'put', url, data: payload, ...config }),
    [request]
  );

  const patch = useCallback(
    (url, payload, config = {}) => request({ method: 'patch', url, data: payload, ...config }),
    [request]
  );

  const remove = useCallback((url, config = {}) => request({ method: 'delete', url, ...config }), [request]);

  const testConnection = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await checkApiConnection();
      return {
        ok: true,
        baseUrl: API_BASE_URL,
        status: response.status,
        data: response.data
      };
    } catch (connectionError) {
      setError(connectionError);
      return {
        ok: false,
        baseUrl: API_BASE_URL,
        status: connectionError?.response?.status ?? null,
        message: connectionError?.message ?? 'API connection failed'
      };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    data,
    baseUrl: API_BASE_URL,
    clearError,
    request,
    get,
    post,
    put,
    patch,
    remove,
    testConnection
  };
};
