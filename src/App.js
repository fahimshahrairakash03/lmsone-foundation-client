import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Profile from "./components/Profile";

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
        },
        {
          path: "/user/:id",
          element: <PostDetails></PostDetails>,
          loader: ({ params }) =>
            fetch(`https://dummyjson.com/users/${params.id}`),
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
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
