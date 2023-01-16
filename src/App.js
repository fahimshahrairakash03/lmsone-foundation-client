import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/post",
          element: <Posts></Posts>,
          loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        },
        {
          path: "/post/:id",
          element: <PostDetails></PostDetails>,
          loader: ({ params }) =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
