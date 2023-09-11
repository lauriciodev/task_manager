import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./components/login";
import Admin from "./components/admin";

const MyRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Admin>
        <Home />
      </Admin>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default MyRoutes;
