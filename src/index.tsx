import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';
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
        element: <h1>Archive page</h1>,
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
