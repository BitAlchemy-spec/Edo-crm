import type { ReactElement } from "react";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./global.css";

import Sidebar from "./components/Sidebar/Sidebar";
import AuthForm from "./components/AuthForm/AuthForm";
import External from "./components/External/External";
import Incoming from "./components/Incoming/Incoming";
import Outgoing from "./components/Outgoing/Outgoing";
import Internal from "./components/Internal/Internal";
import NotFound from "./components/NotFound/NotFound";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthForm />,
    errorElement: <NotFound />,
  },
  {
    element: <Sidebar />,
    children: [
      { path: "external", element: <External /> },
      { path: "incoming", element: <Incoming /> },
      { path: "outgoing", element: <Outgoing /> },
      { path: "internal", element: <Internal /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouter = (): ReactElement => (
  <MantineProvider>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </MantineProvider>
);

export default AppRouter;

