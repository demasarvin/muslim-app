import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuranPage from "./pages/Quran/Quran.jsx";
import DoaPage from "./pages/Doa/Doa.jsx";
import DzikirPage from "./pages/Dzikir.jsx";
import HaditsPage from "./pages/Hadits.jsx";
import DetailQuranPage from "./pages/Quran/Detail.jsx";
import DetailDoaPage from "./pages/Doa/Detail.jsx";

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
    path: "/quran/ayah/surah/:id",
    element: <DetailQuranPage />,
  },
  {
    path: "/doa",
    element: <DoaPage />,
  },
  {
    path: "/doa/:id",
    element: <DetailDoaPage />,
  },
  {
    path: "/dzikir",
    element: <DzikirPage />,
  },
  {
    path: "/hadits",
    element: <HaditsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
