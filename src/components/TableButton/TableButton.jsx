import React from "react";

import "./TableButton.css";

const TableButton = (props) => {
  return (
    <div className={props.class}>
      <span className="button-text">{props.name}</span>
    </div>
  );
};

export default TableButton;
