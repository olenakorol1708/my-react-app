import "./App.scss";
import { Link, Outlet } from "react-router-dom";
import paths from "./Paths/paths";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to={paths.HOME}>Home</Link>
          <Link to={paths.CASE}>Case</Link>
          <Link to={paths.PRICE}>Price</Link>
          <Link to={paths.ABOUT}>About</Link>
          <Link to={paths.BLOG}>Blog</Link>
        </nav>
      </header>

      <br />
      <Outlet />
    </>
  );
}

export default App;
