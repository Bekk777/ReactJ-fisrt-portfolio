import React, { useState } from "react";
import "./Todo.css";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");
  //   const [value, setValue] = useState("");
  function SubmitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      //   setValue(" ");
      input.clear();
    }
  }

  return (
    <form onSubmit={SubmitHandler}>
      <input
        className="Input"
        {...input.bind }
        // value={value}
        // onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" id="btn">
        {" "}
        Add Klub
      </button>
    </form>
  );
}
AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
