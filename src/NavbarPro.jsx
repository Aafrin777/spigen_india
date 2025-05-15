
import React from 'react';
import { FaBars } from 'react-icons/fa'; // Import Hamburger icon from react-icons
import './index.css'; // Import CSS file

const NavbarPro = ({ goToProducts }) => (
  <button className="menu-button" onClick={goToProducts}>
    <FaBars size={20} />
  </button>
);

export default NavbarPro;