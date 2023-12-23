import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './Components/Root';
import { NotFound } from './Components/shared/NotFound';
import { Home } from './Components/pages/Home';
import { Login } from './Components/pages/Login';
import { AuthProvider } from './Components/providers/AuthProvider';
import { Registration } from './Components/pages/Registration';
import { Plans } from './Components/pages/Plans';
import { Setting } from './Components/pages/Setting';
import { PrivateRoute } from './Components/utils/PrivateRoute';
import { Dashboard } from './Components/pages/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },
      {
        path: '/plans',
        element: <Plans></Plans>,
      },
      {
        path: '/setting',
        element: (
          <PrivateRoute>
            <Setting></Setting>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
