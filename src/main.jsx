import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayouts from './layouts/Mainlayouts.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts />,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        element: <Home />
      },
      {
        path: 'coffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <CoffeeDetails />
      },
      {
        path: 'addcoffee',
        element: <AddCoffee />
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <UpdateCoffee />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
