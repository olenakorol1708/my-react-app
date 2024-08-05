
import React from 'react';
import './App.scss';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/case">Case</Link>
          <Link to="/price">Price</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
     <br/>
      <Outlet />
    </>
  );
}


export default App;

