import type { ReactElement } from "react";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import AuthForm from "./components/AuthForm/AuthForm";
import External from "./components/Page/External"; 


const routes = [
  {
    path: "/",
    element: <AuthForm />,
    errorElement: <div>Щось пішло не так...</div>,
  },
  {
    element: <Sidebar />,
    children: [
      { path: "external", element: <External/> },
    ],
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


