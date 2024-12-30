import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './components/JobPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Main layout wrapper
    children: [
      {
        path: "/", // Nested route
        element: <HomePage />, // Content for this route
      },
      {
        path: "/jobs", 
        element: <JobsPage />, 
      },
      {
        path: "/jobs/:id", 
        element: <JobPage />, 
        loader : jobLoader,
      },
      {
        path: "*", 
        element: <NotFoundPage />, 
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
