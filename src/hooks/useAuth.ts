// // src/hooks/useAuth.ts
// import { useState, useCallback } from 'react';
// import { AuthState, LoginCredentials, User } from '../types/auth.types';

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
//   isLoading: false,
//   error: null
// };

// export const useAuth = () => {
//   const [authState, setAuthState] = useState<AuthState>(initialState);

//   const login = useCallback(async (credentials: LoginCredentials) => {
//     setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
//     try {
//       // Make your API call here
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials)
//       });
      
//       if (!response.ok) throw new Error('Login failed');
      
//       const user: User = await response.json();
//       setAuthState({
//         user,
//         isAuthenticated: true,
//         isLoading: false,
//         error: null
//       });
      
//       localStorage.setItem('token', 'your-token-here');
//     } catch (error) {
//       setAuthState(prev => ({
//         ...prev,
//         isLoading: false,
//         error: error instanceof Error ? error.message : 'An error occurred'
//       }));
//     }
//   }, []);

//   const logout = useCallback(() => {
//     localStorage.removeItem('token');
//     setAuthState(initialState);
//   }, []);

//   return { ...authState, login, logout };
// };


import { useState, useCallback } from 'react';
import { AuthState, LoginCredentials, User } from '../types/auth.types';
import { MOCK_USER } from '../config/auth.config';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      return {
        user: MOCK_USER.userData,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    }
    return initialState;
  });

  const login = useCallback(async (credentials: LoginCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Check mock credentials
      if (
        credentials.email === MOCK_USER.email &&
        credentials.password === MOCK_USER.password
      ) {
        // Set mock user data
        setAuthState({
          user: MOCK_USER.userData,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
        
        // Store token in localStorage
        localStorage.setItem('token', 'mock-jwt-token');
        return true;
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred'
      }));
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setAuthState(initialState);
  }, []);

  return { ...authState, login, logout };
};
