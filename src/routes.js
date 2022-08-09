import { Navigate, useRoutes } from "react-router-dom";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Page404 from "./pages/page404";
import Porfolio from "./pages/porfolio";
import About from "./pages/about";

export default function Router() {
  let element = useRoutes([
    {
      path: "/petrus-app/",
      element: <Homepage />
      // children: [
      //   {
      //     path: "messages",
      //     element: <DashboardMessages />,
      //   },
      //   { path: "tasks", element: <DashboardTasks /> },
      // ],
    },
    { path: '/petrus-app/about-me', element: <About /> },
    { path: '/petrus-app/porfolio', element: <Porfolio /> },
    { path: '/petrus-app/contact', element: <Contact /> },
    { path: '/petrus-app/404', element: <Page404 /> },
    { path: '/petrus-app/*', element: <Navigate to="/petrus-app/404" replace /> },
  ]);
  return element;
} 
