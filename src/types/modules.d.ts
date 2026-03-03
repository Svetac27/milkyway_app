declare module './stores/api.store' {
  export function useApiStore(): {
    loading: boolean;
    error: unknown;
    data: unknown;
    baseUrl: string;
    clearError: () => void;
    request: (config: unknown) => Promise<unknown>;
    get: (url: string, config?: Record<string, unknown>) => Promise<unknown>;
    post: (url: string, payload?: unknown, config?: Record<string, unknown>) => Promise<unknown>;
    put: (url: string, payload?: unknown, config?: Record<string, unknown>) => Promise<unknown>;
    patch: (url: string, payload?: unknown, config?: Record<string, unknown>) => Promise<unknown>;
    remove: (url: string, config?: Record<string, unknown>) => Promise<unknown>;
    testConnection: () => Promise<unknown>;
  };
}

declare module './stores/api.store.js' {
  export function useApiStore(): {
    loading: boolean;
    error: unknown;
    data: unknown;
    baseUrl: string;
    clearError: () => void;
    request: (config: unknown) => Promise<unknown>;
    get: (url: string, config?: Record<string, unknown>) => Promise<unknown>;
    post: (url: string, payload?: unknown, config?: Record<string, unknown>) => Promise<unknown>;
    put: (url: string, payload?: unknown, config?: Record<string, unknown>) => Promise<unknown>;
    patch: (url: string, payload?: unknown, config?: Record<string, unknown>) => Promise<unknown>;
    remove: (url: string, config?: Record<string, unknown>) => Promise<unknown>;
    testConnection: () => Promise<unknown>;
  };
}

declare module './hooks/useAuthContext' {
  export function useAuthContext(): {
    isAuthenticated: boolean;
    user: unknown;
    loading: boolean;
    login: (email: string, password: string) => Promise<unknown>;
    logout: () => void;
  };
}

declare module './hooks/useAuthContext.js' {
  export function useAuthContext(): {
    isAuthenticated: boolean;
    user: unknown;
    loading: boolean;
    login: (email: string, password: string) => Promise<unknown>;
    logout: () => void;
  };
}

declare module '../hooks/useAuthContext' {
  export function useAuthContext(): {
    isAuthenticated: boolean;
    user: unknown;
    loading: boolean;
    login: (email: string, password: string) => Promise<unknown>;
    logout: () => void;
  };
}

declare module '../hooks/useAuthContext.js' {
  export function useAuthContext(): {
    isAuthenticated: boolean;
    user: unknown;
    loading: boolean;
    login: (email: string, password: string) => Promise<unknown>;
    logout: () => void;
  };
}
