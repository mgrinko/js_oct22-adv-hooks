import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { ArchivePage } from './pages/ArchivePage';
import { TodosPage } from './pages/TodosPage';
import { TodosProvider } from './TodosContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Page not found</p>,
    children: [
      {
        path: "todos",
        element: <TodosPage />,
      },
      {
        path: "archive",
        element: <ArchivePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TodosProvider>
    <RouterProvider router={router} />
  </TodosProvider>
);
