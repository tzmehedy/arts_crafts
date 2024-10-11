import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "./PrivateRouter";
import AddCraft from "../Pages/AddCraft";
import MyArtCraftList from "../Pages/MyArtCraftList";
import AllArtsCrafts from "../Pages/AllArtsCrafts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRouter>
            <AddCraft></AddCraft>
          </PrivateRouter>
        ),
      },
      {
        path: "/myArtCraftList",
        element: (
          <PrivateRouter>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRouter>
        ),
        
      },
      {
        path: "/allArtsAndCrafts",
        element: <AllArtsCrafts></AllArtsCrafts>,
        loader: () => fetch("http://localhost:5000/allArtsCrafts"),
      },
    ],
  },
]);

export default router;
