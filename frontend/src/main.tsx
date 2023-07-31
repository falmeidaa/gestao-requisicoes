import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { WithSwr, CreateCompany, WithoutSwr } from "./pages";
import "./index.css";
import { Layout } from "./layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/sem-swr", element: <WithoutSwr /> },
      { path: "/com-swr", element: <WithSwr /> },
      { path: "/criar-empresa", element: <CreateCompany /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
