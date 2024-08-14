import "./App.scss";
import { Outlet } from "react-router-dom";

import NetComponent from "./Components/FirstScreen/Net-component/Net";
import Header from "./Components/Header/Header";

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
