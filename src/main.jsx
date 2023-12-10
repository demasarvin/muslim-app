import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuranPage from "./pages/Quran.jsx";
import DoaPage from "./pages/Doa.jsx";
import DzikirPage from "./pages/Dzikir.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/quran",
    element: <QuranPage />,
  },
  {
    path: "/doa",
    element: <DoaPage />,
  },
  {
    path: "/dzikir",
    element: <DzikirPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
