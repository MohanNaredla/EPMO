import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { serviceDropdown } from "./serviceDropdown";
import "./Dropdown.css";

const Dropdown = () => {
  const [dropDown, setdropDown] = useState(false);

  return (
    <>
      <ul
        className={dropDown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => {
          setdropDown(!dropDown);
        }}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={item.cName}
                onClick={() => {
                  setdropDown(false);
                }}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
