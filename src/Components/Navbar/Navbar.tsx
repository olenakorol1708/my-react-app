import React from "react";
import { Link } from "react-router-dom";
import paths from '@paths/paths';
import Logo from '@images/XriiLogo/gradient_logo.svg';


import "./navbar.scss";

const Navbar = () => {
  return (
    <div className = "header">
      <div className="container">
        <nav>
        <Link to={paths.HOME}> <div className="logo"><img src={Logo} alt = "Logo"/></div></Link>
          <ul>
           <li><Link to={paths.HOME}>Home</Link></li>
            <li>
              <Link to={paths.CASE}>Case studies</Link>
            </li>
            <li>
              {" "}
              <Link to={paths.PRICE}>Pricing</Link>
            </li>
            <li>
              {" "}
              <Link to={paths.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={paths.BLOG}>Blog</Link>
            </li>
            <li>
              {" "}
              <Link to={paths.HOME}></Link>
            </li>
          </ul>
          <div className="action_button">
          <button className="contact-us_button">Contact us</button>
          <button className="get-started_button">Get started</button>
          </div>
          
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
