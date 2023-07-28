import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { WithtSwr } from "./WithSwr.tsx";
import { WithoutSwr } from "./WithoutSwr.tsx";
import "./index.css";
import { Layout } from "./layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/sem-swr", element: <WithoutSwr /> },
      { path: "/com-swr", element: <WithtSwr /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
