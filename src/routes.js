import { Navigate, useRoutes } from "react-router-dom";
export default function Router() {
  let element = useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <DashboardMessages />,
        },
        { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    { path: "about", element: <AboutPage /> },
    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
  return Router;
} 
