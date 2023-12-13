import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Result from "../pages/ResultPage";
import AddLink from "../pages/AddLinkPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/results",
    element: <Result />,
  },
  {
    path: "/addLink",
    element: <AddLink />,
  },
]);

export default routes;
