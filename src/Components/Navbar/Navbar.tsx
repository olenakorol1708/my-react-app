import React, { useState } from 'react';
import paths from '../../Paths/paths';
import menuLinksConfigs from '../../Paths/menuLinksConfig';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/images/XriiLogo/gradient_logo.svg';
import Burger from '@/images/Homepage/burgerMenu.svg';
import { Button } from 'antd';
import './navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(paths.REGISTER);
  };
  const toggleMenu = (): void => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <nav>
          <Link to={paths.HOME}>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>

          <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
            {menuLinksConfigs.map(link => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <div className="action_button">
            <Button
              type="link"
              className="contact-us_button"
              onClick={handleRegisterClick}
            >
              Contact us
            </Button>

            <Button type="text" className="get-started_button">
              Get started
            </Button>
          </div>

          <div className="burger" onClick={toggleMenu}>
            <img src={Burger} alt="menu_icon" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
