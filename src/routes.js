import { Navigate, useRoutes } from "react-router-dom";
import HomePage from './component/onepirate/Home'
import NotFound from "./pages/Page404";
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/404",
      element: <NotFound />
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    },
  ]);
}
