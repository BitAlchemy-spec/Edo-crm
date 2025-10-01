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
      { path: "external", element: <Page name="Зовнішні документи" /> },
      { path: "incoming", element: <Page name="Вхідні документи" /> },
      { path: "outgoing", element: <Page name="Вихідні документи" /> },
      { path: "internal", element: <Page name="Внутрішні документи" /> },
      { path: "archive", element: <Page name="Архів" /> },
      { path: "drafts", element: <Page name="Чернетки" /> },
      { path: "templates", element: <Page name="Шаблони" /> },
      { path: "contacts", element: <Page name="Контакти контрагентів" /> },
      { path: "company", element: <Page name="Налаштування компанії" /> },
      { path: "pricing", element: <Page name="Тарифи" /> },
      { path: "help", element: <Page name="Корисне" /> },
      { path: "settings", element: <Page name="Налаштування" /> },
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


