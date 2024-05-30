import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faFile,
  faFileContract,
  faGear,
  faHouse,
  faLink,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import { faJoomla } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink className="navbar__header">
          <FontAwesomeIcon icon={faJoomla} />
        </NavLink>
        <ul className="navlink__items">
          <li className="navbar__item" >
            <NavLink exact to="/" className="navlink__item">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li className="navbar__item" >
            <NavLink exact to="/projects" className="navlink__item">
              <FontAwesomeIcon icon={faFile} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink exact to="/contracts" className="navlink__item">
              <FontAwesomeIcon icon={faFileContract} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink exact to="/quick_links" className="navlink__item">
              <FontAwesomeIcon icon={faLink} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink exact to="/reports" className="navlink__item">
              <FontAwesomeIcon icon={faTable} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink exact to="/dashboard" className="navlink__item">
              <FontAwesomeIcon icon={faChartArea} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink exact to="/settings" className="navlink__item">
              <FontAwesomeIcon icon={faGear} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
