import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import {  createBrowserRouter,  RouterProvider, } from "react-router-dom";
import Home from './views/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
