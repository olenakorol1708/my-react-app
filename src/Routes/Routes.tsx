import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  AboutPage,
  BlogPage,
  CasePage,
  HomePage,
  PricePage,
  RegisterForm,
} from '@/Pages';
import { paths } from '@/Paths';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: paths.HOME, element: <HomePage /> },
      { path: paths.REGISTER, element: <RegisterForm /> },
      { path: paths.CASE, element: <CasePage /> },
      { path: paths.PRICE, element: <PricePage /> },
      { path: paths.ABOUT, element: <AboutPage /> },
      { path: paths.BLOG, element: <BlogPage /> },
    ],
  },
]);
