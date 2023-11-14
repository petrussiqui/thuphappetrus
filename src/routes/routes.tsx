import MainLayout from "layouts/MainLayout";
import { RouteObject, useRoutes } from "react-router-dom";
import { UserRoutes } from "./userRoutes";

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: "*",
      element: <MainLayout />,
      children: UserRoutes,
    },
  ];
  return useRoutes(routes);
};

export default Router;
