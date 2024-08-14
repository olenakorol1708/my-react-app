import "./App.scss";
import { Outlet } from "react-router-dom";
import { NetComponent, Header } from "./Components"

function App() {
  return (
    <>
      <header>
        <NetComponent/>
        <Header/>
       
      </header>

      <br />
      <Outlet />
    </>
  );
}

export default App;
