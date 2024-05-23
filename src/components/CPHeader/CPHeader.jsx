import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./CPHeader.css";

const CPHeader = (props) => {
  return (
    <div className="header">
      <h1 className="header__title">{`${props.name}s`}</h1>
      <div className="header__content">
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder={`Search ${props.name}s`}
          />
          <button className="search__submit">
            <FontAwesomeIcon icon={faSearch} className="search__icon"/>
          </button>
        </form>
        <button className="header__create">{`Start New ${props.name}`}</button>
      </div>
    </div>
  );
};

export default CPHeader;
