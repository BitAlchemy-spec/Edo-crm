import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { ReactElement } from "react";
import { MantineProvider } from "@mantine/core";

import { DoubleHeader } from "./components/DoubleHeader/DoubleHeader";
import AuthForm from "./components/AuthForm/AuthForm";

const routes = [
  {
    path: "/",
    element: <AuthForm />,
    errorElement: <div>Что-то пошло не так...</div>,
  },
  {
    path: "/dashboard", 
    element: <DoubleHeader />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = (): ReactElement => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default AppRouter;