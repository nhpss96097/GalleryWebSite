import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./routes/Homepage";
import Aboutpage from "./routes/Aboutpage";
import Page404 from "./routes/Page404";
import "./styles/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: "Homepage",
        element: <Homepage />,
      },
      {
        path: "aboutpage",
        element: <Aboutpage />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
