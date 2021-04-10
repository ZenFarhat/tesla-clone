import React, { useState } from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [shown, setShown] = useState(false);

  const showMenu = () => {
    setShown(!shown);
  };
  return (
    <div className='header'>
      <div className={shown ? "burger shown" : "burger"} onClick={showMenu}>
        <MenuIcon />
      </div>
      <nav className={shown ? "shown" : ""}>
        <div className='navBurger' onClick={showMenu}>
          <MenuIcon />
        </div>
        <div className='header__logo '>
          <a href='/'>
            <img src={TeslaLogo} alt='tesla-logo' />
          </a>
        </div>
        <div className='header__center'>
          <a href='#modelS' onClick={showMenu}>
            <p>Model S</p>
          </a>
          <a href='#model3' onClick={showMenu}>
            <p>Model 3</p>
          </a>
          <a href='#modelX' onClick={showMenu}>
            <p>Model X</p>
          </a>
          <a href='#modelY' onClick={showMenu}>
            <p>Model Y</p>
          </a>
          <a href='#solarPanel' onClick={showMenu}>
            <p>Solar Panel</p>
          </a>
        </div>
        <div className='header__right'>
          <p>Shop</p>
          <p>Tesla Account</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
