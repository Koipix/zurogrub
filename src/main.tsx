import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.tsx'
import FoodBrowser from './comp/FoodBrowser.tsx'
import ViewCart from './comp/ViewCart.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <FoodBrowser/>
      },
      {
        path: 'view-cart',
        element: <ViewCart/>
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)
