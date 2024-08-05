import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import CasePage from "../Pages/CasePage/CasePage";
import PricePage from "../Pages/PricePage/PricePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import BlogPage from "../Pages/BlogPage/BlogPage";


export const router = createBrowserRouter([{
    path:'/',
    element: <App/>,
    children:[
        {path:'/', element:<HomePage/>},
        {path:'/case',element:<CasePage/>},
        {path:'/price', element:<PricePage/>},
        {path:'/about',element:<AboutPage/>},
        {path:'/blog', element:<BlogPage/>},
    ]
}])