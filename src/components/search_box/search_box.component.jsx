import React from "react";
import "./search_box.styles.css";

export const SearchBox = ({placeholder, onChange}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
