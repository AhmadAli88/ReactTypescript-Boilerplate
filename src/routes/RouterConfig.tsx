// src/routes/RouterConfig.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PATH } from '../config/routes.config';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardLayout } from '../components/Layout/DashboardLayout';

// Lazy load pages
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgotPassword = React.lazy(() => import('../pages/auth/ForgotPassword'));
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const Profile = React.lazy(() => import('../pages/dashboard/Profile'));
const Settings = React.lazy(() => import('../pages/dashboard/Settings'));
const Analytics = React.lazy(() => import('../pages/dashboard/Analytics'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

export const RouterConfig: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path={PATH.HOME} element={<Navigate to={PATH.LOGIN} replace />} />
        <Route
          path={PATH.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={PATH.REGISTER}
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path={PATH.FORGOT_PASSWORD}
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path={PATH.DASHBOARD} element={<Dashboard />} />
          <Route path={PATH.DASHBOARD_ANALYTICS} element={<Analytics />} />
          <Route path={PATH.PROFILE} element={<Profile />} />
          <Route path={PATH.SETTINGS} element={<Settings />} />
        </Route>

        {/* Catch all */}
        <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};
