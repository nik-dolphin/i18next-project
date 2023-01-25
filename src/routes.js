import { createBrowserRouter } from "react-router-dom";
import NotFound from "./404/NotFound";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);
