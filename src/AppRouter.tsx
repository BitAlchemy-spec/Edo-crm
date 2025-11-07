/**
 * Главный роутер приложения
 * Определяет все маршруты и оборачивает приложение в провайдеры
 */
import type { ReactElement } from "react";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Импорт компонентов страниц
import Sidebar from "./components/Sidebar/Sidebar";
import AuthForm from "./components/AuthForm/AuthForm";
import External from "./components/External/External";
import Incoming from "./components/Incoming/Incoming";
import Outgoing from "./components/Outgoing/Outgoing";
import Internal from "./components/Internal/Internal";
import Help from "./components/Help/Help";
import NotFound from "./components/NotFound/NotFound";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

/**
 * Конфигурация маршрутов приложения
 * Определяет структуру навигации и соответствующие компоненты
 */
const routes = [
  // Главная страница - форма авторизации
  {
    path: "/",
    element: <AuthForm />,
    errorElement: <NotFound />,
  },
  // Защищенные маршруты с сайдбаром
  {
    element: <Sidebar />,
    children: [
      { path: "external", element: <External/> },     // Зовнішні документи
      { path: "incoming", element: <Incoming/> },     // Вхідні документи
      { path: "outgoing", element: <Outgoing/> },     // Вихідні документи
      { path: "internal", element: <Internal/> },     // Внутрішні документи
      { path: "help", element: <Help/> },             // Тарифи
    ],
  },
  // Catch-all маршрут для несуществующих страниц (404)
  {
    path: "*",
    element: <NotFound />,
  },
];

// Создание роутера с использованием Browser Router
const router = createBrowserRouter(routes);

/**
 * Компонент роутера приложения
 * Оборачивает приложение в провайдеры Mantine и ErrorBoundary
*/

const AppRouter = (): ReactElement => {
  return (
    <MantineProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </MantineProvider>
  );
};

export default AppRouter;


