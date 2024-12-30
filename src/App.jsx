import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Main layout wrapper
    children: [
      {
        path: "/", // Nested route
        element: <HomePage />, // Content for this route
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
