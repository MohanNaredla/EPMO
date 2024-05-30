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
            <NavLink to="/" className="navlink__item">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li className="navbar__item" >
            <NavLink to="/projects" className="navlink__item">
              <FontAwesomeIcon icon={faFile} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contracts" className="navlink__item">
              <FontAwesomeIcon icon={faFileContract} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/quick_links" className="navlink__item">
              <FontAwesomeIcon icon={faLink} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/reports" className="navlink__item">
              <FontAwesomeIcon icon={faTable} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/dashboard" className="navlink__item">
              <FontAwesomeIcon icon={faChartArea} />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/settings" className="navlink__item">
              <FontAwesomeIcon icon={faGear} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
