import React from "react";
import PropTypes from "prop-types";
import partial from "lodash/partial";

export default function TodoItem({ todo, onRemoveClick }) {
  return (
    <li>
      <div>{todo.title}</div>
      <div>{todo.userName}</div>
      <button onClick={partial(onRemoveClick, todo)}>Delete</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object
};
