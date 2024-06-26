import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Index } from "../pages/Index";
import { AboutMe } from "../pages/AboutMe";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
    ],
  },
]);
