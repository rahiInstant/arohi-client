import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import AllSpot from "./AllSpot.jsx";
import Home from "./Home.jsx";
import AddSpot from "./AddSpot.jsx";
import MyList from "./MyList.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Detail from "./Detail.jsx";
import UpdateSpot from "./UpdateSpot.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import {Toaster} from 'react-hot-toast'
import { HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-spot",
        element: <AllSpot></AllSpot>,
      },
      {
        path: "/add-spot",
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/my-list",
        element: <MyList></MyList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/detail/:id",
        element: <Detail></Detail>,
      },
      {
        path: "/update/:id",
        element: <UpdateSpot></UpdateSpot>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster></Toaster>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
      
    </AuthProvider>
  </React.StrictMode>
);
