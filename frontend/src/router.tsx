import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/Dashboard.page";
import ErrorPage from "./pages/Error.page";
import MainPage from "./pages/Main.page";

export default createBrowserRouter([
  {
    path: "",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
