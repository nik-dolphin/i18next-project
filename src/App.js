import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
