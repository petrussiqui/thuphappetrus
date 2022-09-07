import { Navigate, useRoutes } from "react-router-dom";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Page404 from "./pages/page404";
import Porfolio from "./pages/porfolio";
import About from "./pages/about";
import Calligraphy from "./pages/calligraphy";

export default function Router() {
  let element = useRoutes([
    {
      path: "/thuphappetrus/",
      element: <Homepage />
      // children: [
      //   {
      //     path: "messages",
      //     element: <DashboardMessages />,
      //   },
      //   { path: "tasks", element: <DashboardTasks /> },
      // ],
    },
    { path: '/thuphappetrus/about-me', element: <About /> },
    { path: '/thuphappetrus/porfolio', element: <Porfolio /> },
    { path: '/thuphappetrus/calligraphy', element: <Calligraphy /> },
    { path: '/thuphappetrus/contact', element: <Contact /> },
    { path: '/thuphappetrus/404', element: <Page404 /> },
    { path: '/thuphappetrus/*', element: <Navigate to="/thuphappetrus/404" replace /> },
  ]);
  return element;
} 
