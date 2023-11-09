import { useRoutes } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Dashboard } from "../pages/Dashboard";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    { path: "/admins", element: <Admin /> },
  ]);
};

export default AppRoutes;
