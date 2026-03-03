import axios from 'axios';

const STATIC_FALLBACK_API_BASE_URL = 'http://localhost:4400/api/';

const wsToApiBaseUrl = (wsUrl) => {
  if (!wsUrl || typeof wsUrl !== 'string') {
    return null;
  }

  if (wsUrl.startsWith('ws://')) {
    return `${wsUrl.replace('ws://', 'http://')}/api`;
  }

  if (wsUrl.startsWith('wss://')) {
    return `${wsUrl.replace('wss://', 'https://')}/api`;
  }

  return `${wsUrl}/api`;
};

const DEFAULT_API_BASE_URL = wsToApiBaseUrl(import.meta.env.VITE_WS_BASE_URL) || STATIC_FALLBACK_API_BASE_URL;

const normalizeBaseUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return DEFAULT_API_BASE_URL;
  }

  return url.endsWith('/') ? url : `${url}/`;
};

export const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL);

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 0, // No timeout
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

const apiClient = axios.create(apiConfig);

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

export const getAuthToken = () => localStorage.getItem('token') || '';

export const clearAuthToken = () => {
  localStorage.removeItem('token');
};

export const checkApiConnection = () => apiClient.get('/');

apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
