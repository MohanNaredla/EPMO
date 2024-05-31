import React from "react";

import Select from "react-select";
import "./Filter.css";

function Filter(props) {
  return (
    <div className="filter">
      <h3 className="filter__title">{props.title}</h3>
      <Select
        options={props.options}
        placeholder={`Select ${props.title}`}
        isClearable
        isSearchable={false}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "12px",
            border: "none",
            boxShadow: "none",
            boxSizing: "border - box",
            "&:hover": {
              border: "none",
            },
            padding: "2px 8px",
            marginBottom: 0,
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          placeholder: (base) => ({
            ...base,
            color: "rgba(0, 0, 0, 0.3)",
          }),
          menu: (base) => ({
            ...base,
            marginTop: 0,
            padding: 0,
            marginBottom: "20px",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: "rgba(169, 180, 183, 0.5)",
            margin: 0,
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#FAFAFA" : "white",
            color: "black",
            fontWeight: state.isFocused ? "600" : "500",
            margin: 0,
          }),
          clearIndicator: (base) => ({
            ...base,
            color: "rgba(169, 180, 183, 0.5)",
            margin: 0,
            transform: "translateX(12px)",
          }),
          singleValue: (base) => ({
            ...base,
            fontSize: "17px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }),
          valueContainer: (provided, state) => ({
            ...provided,
            textOverflow: "ellipsis",
            maxWidth: "90%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "flex",
            flexWrap: "nowrap",
          }),
        }}
      />
    </div>
  );
}

export default Filter;
