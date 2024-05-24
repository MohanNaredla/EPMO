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
        isMulti
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
            color: "rgba(169, 180, 183, 0.5)",
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
            backgroundColor: state.isFocused ? "#845BB3" : "white",
            color: state.isFocused ? "white" : "black",
            margin: 0,
          }),
          singleValue: (base) => ({
            ...base,
            backgroundColor: "#845BB3",
            color: "white",
            borderRadius: "10px",
            maxWidth: "fit-content",
            padding: "2px 8px",
          }),
          clearIndicator: (base) => ({
            ...base,
            color: "rgba(169, 180, 183, 0.5)",
            margin: 0,
            transform: "translateX(12px)",
          }),
          multiValue: (base) => ({
            ...base,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            border: "1px solid #ddd",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            paddingRight: "6px",
          }),
          multiValueLabel: (base) => ({
            ...base,
            fontSize: "16px",
            marginRight: "4px",
          }),
          multiValueRemove: (base) => ({
            ...base,
            backgroundColor: "#9E9E9E",
            color: "white",
            borderRadius: "50%",
            height: "50%",
            padding: "0",
            maxWidth: "fit-content",
            "&:hover": {
              backgroundColor: "grey",
              color: "white",
              borderRadius: "50%",
            },
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
