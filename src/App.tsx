// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { RouterConfig } from './routes/RouterConfig';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterConfig />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;