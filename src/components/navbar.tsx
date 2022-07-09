import React from "react";
import { ReactComponent as Image } from "../images/Star_Wars_logo.svg";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='logo-container'>
          <Image className='logo' />
        </div>
        <div className='nav-buttons'>
        <a className='nav-btn' href='/'>
            Home
          </a>
          <a className='nav-btn' href='/about'>
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
