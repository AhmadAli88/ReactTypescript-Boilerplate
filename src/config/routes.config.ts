// src/config/routes.config.ts
export const PATH = {
    // Public paths
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    
    // Private paths
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    
    // Nested dashboard routes
    DASHBOARD_ANALYTICS: '/dashboard/analytics',
    DASHBOARD_REPORTS: '/dashboard/reports',
    DASHBOARD_USERS: '/dashboard/users',
    
    // Catch all
    NOT_FOUND: '*'
  } as const;