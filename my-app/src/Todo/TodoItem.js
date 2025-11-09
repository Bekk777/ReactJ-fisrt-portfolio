import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Todo.css";
import Context from "../Context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.complited) {
    classes.push("done");
  }
  return (
    <li className="li-item">
      <span id="input-container" className={classes.join(" ")}>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          className="input"
        />{" "}
        &nbsp;
        <b>{index + 1}</b> &nbsp; {todo.title}
      </span>
      <button className="btn" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
