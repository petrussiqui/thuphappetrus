import MainLayout from "layouts/MainLayout";
import { RouteObject, useRoutes } from "react-router-dom";
import { AppRoutes, UserRoutes } from "./userRoutes";
import AppLayout from "layouts/AppLayout";

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: "*",
      element: <MainLayout />,
      children: UserRoutes,
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: AppRoutes,
    },
  ];
  return useRoutes(routes);
};

export default Router;
