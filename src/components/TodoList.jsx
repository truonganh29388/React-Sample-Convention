import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, onRemoveClick }) {
  function renderTodoItem(todo) {
    return <TodoItem todo={todo} key={todo.id} onRemoveClick={onRemoveClick} />;
  }

  return (
    <div className="todo-list">
      <ul>{todos.map(renderTodoItem)}</ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array
};
