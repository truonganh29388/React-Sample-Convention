import React, { useState } from "react";
import { connect } from "react-redux";
import * as ActionCreators from "../middleware/TodoMiddlewareActions";

function TodoAdd({ dispatch }) {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    const title = event.target.value;
    setTitle(title);
  }

  function addTodo() {
    const todo = Object.freeze({ title });
    dispatch(ActionCreators.fetchAddTodo(todo));
    setTitle("");
  }

  return (
    <form className="form">
      <input type="text" onChange={handleChange} value={title} />
      <button onClick={addTodo} type="button">
        Add
      </button>
    </form>
  );
}

export default connect()(TodoAdd);
