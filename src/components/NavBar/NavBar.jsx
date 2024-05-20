import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./NavBar.css";
import Dropdown from "../Dropdown/Dropdown";

const NavBar = () => {

  const [dropDown, setdropDown] = useState(false);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
          <NavLink exact to="/" className="navbar__title">
            EPMO
          </NavLink>
          <ul className="navbar__items">
            <li className="navbar__item">
              <NavLink exact to="/" className="navlink__item">
                Home
              </NavLink>
            </li>
            <motion.li className="navbar__item" onMouseEnter={() => { setdropDown(true) }} onMouseLeave={() => { setdropDown(false) }}>
              <NavLink exact to="/" className="navlink__item">
                Services
              </NavLink>
              {dropDown && <Dropdown />}
            </motion.li>
            <li className="navbar__item">
              <NavLink exact to="/about" className="navlink__item">
                About
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink exact to="/contact" className="navlink__item">
                Contact
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink exact to="/login" className="navlink__item button">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
