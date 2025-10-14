import type { ReactElement } from "react";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import AuthForm from "./components/AuthForm/AuthForm";
import Page from "./components/Page/Page"; // <-- вынес заглушку в отдельный компонент

/* ==============================
   Определяем роуты
   ============================== */
const routes = [
  {
    path: "/",
    element: <AuthForm />,
    errorElement: <div>Щось пішло не так...</div>,
  },
  {
    path: "/dashboard",
    element: <Sidebar />, // Sidebar как layout
    children: [
      { path: "external", element: <Page/> },
    ],
  },
];

/* ==============================
   Создаём роутер
   ============================== */
const router = createBrowserRouter(routes);

/* ==============================
   Оборачиваем всё в MantineProvider
   ============================== */
const AppRouter = (): ReactElement => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default AppRouter;


