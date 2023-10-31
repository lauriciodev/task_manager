import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./components/login";
import Admin from "./components/admin";
import NewUser from "./components/newUser";
import Info from "./components/info";

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
    path: "/user/new",
    element: <NewUser />,
  },
  {
    path: "/user/info",
    element: <Info />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default MyRoutes;
