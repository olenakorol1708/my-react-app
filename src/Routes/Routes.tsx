import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import CasePage from "../Pages/CasePage/CasePage";
import PricePage from "../Pages/PricePage/PricePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import paths from "../Paths/paths";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: paths.HOME, element: <HomePage /> },
      { path: paths.CASE, element: <CasePage /> },
      { path: paths.PRICE, element: <PricePage /> },
      { path: paths.ABOUT, element: <AboutPage /> },
      { path: paths.BLOG, element: <BlogPage /> },
    ],
  },
]);
