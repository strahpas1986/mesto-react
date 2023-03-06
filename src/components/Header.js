import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__link">
        <img src={logo} alt="Логотип Mesto" className="header__image"/>
      </a>
    </header>
  )
}

export default Header;
