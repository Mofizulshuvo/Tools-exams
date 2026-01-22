import { createBrowserRouter } from "react-router";
import Login from "../Login";
import ToDoList from "../ToDoList";

export const Router = createBrowserRouter([
  {
    path: "/",
    element:<Login></Login>
  },
  {
    path:"/to-do-list",
    element:<ToDoList></ToDoList>
  }
]);