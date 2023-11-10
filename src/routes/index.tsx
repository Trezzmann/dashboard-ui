import { useRoutes } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Dashboard } from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    { path: "/admins", element: <Admin /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default AppRoutes;
