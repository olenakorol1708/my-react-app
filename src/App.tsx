import "./App.scss";
import { Outlet } from "react-router-dom";
import { NetComponent, Header } from "./Components"

function App() {
  return (
    <div className="wrapper">
      <header>
        <NetComponent/>
        <Header/>
       
      </header>

      <br />
      <Outlet />
    </div>
  );
}

export default App;
