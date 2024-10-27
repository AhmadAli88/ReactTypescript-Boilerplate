// src/types/auth.types.ts
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
  }
  
  export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }