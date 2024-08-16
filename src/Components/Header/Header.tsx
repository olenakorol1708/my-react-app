import React from 'react';
import {useState} from 'react';
import logoImage from "../../images/XriiLogo/gradient logo.svg";
import burgerMenu from "..//../images/Homepage/burgerMenu.svg"
import { Link } from "react-router-dom";
import paths from "../../Paths/paths";
import "./style.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
const toggleMenuOpen = ()=>{
  setMenuOpen(!menuOpen)
}
  return (
    <header className="header_container">

      <div className="header_logo">
        <Link to={paths.HOME}>
          <img src={logoImage} alt="companyLogo" />
        </Link>
      </div>

      

      
      <nav className="header_navigation">
        <Link to={paths.CASE}>Case studies</Link>
        <Link to={paths.PRICE}>Pricing</Link>
        <Link to={paths.ABOUT}>About</Link>
        <Link to={paths.BLOG}>Blog</Link>
        <Link to={paths.HOME}></Link>
      </nav>
      
      <div className="header_actions">
        <button className="contact-button_header">Contact us</button>
        <button className="get-started-button_header">Get Started</button>
              
      </div>
      
      <button className='header_burger'>
        <img src = {burgerMenu} onClick = {toggleMenuOpen} alt = "burgerIcon"/>
      </button>
      
      
    </header>
  );
};

export default Header;
