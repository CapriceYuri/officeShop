import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/officeShop/",
    element: <App />,
  },
  {
    path: "/officeShop/Shop",
    element: <Shop />,
  },
  {
    path: "/officeShop/Cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
