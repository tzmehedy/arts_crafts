import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "./PrivateRouter";
import AddCraft from "../Pages/AddCraft";
import MyArtCraftList from "../Pages/MyArtCraftList";
import AllArtsCrafts from "../Pages/AllArtsCrafts";
import Update from "../Pages/Update";
import SubCategoryList from "../Pages/SubCategoryList";
import Details from "../Pages/Details";


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
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },

      {
        path: "/:subcategory_name",
        element: <SubCategoryList></SubCategoryList>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/${params.subcategory_name}`)
      },

      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);

export default router;
