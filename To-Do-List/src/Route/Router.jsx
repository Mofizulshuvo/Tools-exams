import { createBrowserRouter } from "react-router";
import { loginPage } from "../login/loginPage.jsx";
export const Router = createBrowserRouter([
  {
    path: "/",
    element:"",
    children: [
      {
        path: "/",
        element:<loginPage/>,
      },
    ],
  },
]);