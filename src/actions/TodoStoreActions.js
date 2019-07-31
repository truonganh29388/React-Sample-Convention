import { actionTypes } from "../store/todos";

const { reset_todos, remove_todo, add_todo } = actionTypes;

function resetTodos(todos) {
  return {
    type: reset_todos,
    todos
  };
}

function addTodo(todo) {
  return {
    type: add_todo,
    todo
  };
}

function removeTodo(todo) {
  return {
    type: remove_todo,
    todo
  };
}

export { resetTodos, addTodo, removeTodo };
