import { Navigate, useRoutes } from "react-router-dom";
import Contact from "./pages/contact";
import Page404 from "./pages/page404";
import About from "./pages/about";
import Calligraphy from "./pages/calligraphy";

export default function Router() {
  let element = useRoutes([
    { path: '/thuphappetrus/', element: <Calligraphy /> },
    { path: '/thuphappetrus/about-me', element: <About /> },
    { path: '/thuphappetrus/contact', element: <Contact /> },
    { path: '/thuphappetrus/404', element: <Page404 /> },
    { path: '/thuphappetrus/*', element: <Navigate to="/thuphappetrus/404" replace /> },
  ]);
  return element;
} 
