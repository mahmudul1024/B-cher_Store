import { createBrowserRouter } from "react-router-dom";
import "./components/Main";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import "./components/Home";
import Home from "./components/Home";
import "./components/About";
import About from "./components/About";
import "./components/Books";
import "./components/Book";
import Books from "./components/Books";
import "./components/BookDetails";
import BookDetails from "./components/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
]);

export default router;
