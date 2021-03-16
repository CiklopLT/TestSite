import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/testpage_logo.svg';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="top-container">
        <a href="/">
          <div className="top-logo">
            <img src={logo} alt="logo" />
          </div>
        </a>
          <ul className="items">
            <li>
              <a href="#" className="item-link">Home</a>
            </li>
            <li>
              <a href="#" className="item-link">About Us</a>
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;