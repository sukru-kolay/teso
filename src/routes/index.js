import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Result from "../pages/ResultPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/results",
    element: <Result />,
  },
]);

export default routes;
