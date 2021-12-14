import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ setCategories }) {
  const [inputValue, setinputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategories((categories) => [inputValue, ...categories]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
