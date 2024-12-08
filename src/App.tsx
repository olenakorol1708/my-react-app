import './App.scss';

import { Navbar } from '@/Components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
