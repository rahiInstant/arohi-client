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
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import ErrorPage from "./ErrorPage.jsx";
import Private from "./Private.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3600/home-card"),
      },
      {
        path: "/all-spot",
        element: <AllSpot></AllSpot>,
        loader: () => fetch("http://localhost:3600/spot"),
      },
      {
        path: "/add-spot",
        element: (
          <Private>
            <AddSpot></AddSpot>
          </Private>
        ),
      },
      {
        path: "/my-list",
        element: (
          <Private>
            <MyList></MyList>
          </Private>
        ),
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
        element: (
          <Private>
            <Detail></Detail>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3600/card/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <Private>
            <UpdateSpot></UpdateSpot>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3600/card/${params.id}`),
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
