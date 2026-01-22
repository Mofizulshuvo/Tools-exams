import { createBrowserRouter } from "react-router";
import Login from "../Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element:<Login></Login>
  },
]);