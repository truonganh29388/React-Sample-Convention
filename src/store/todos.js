import property from "lodash/property";
import partial from "lodash/partial";
import matchesProperty from "lodash/matchesProperty";
import createReducerAndActionTypes from "redux-points";

/*
function todos(todos = [], action) {
  switch (action.type) {
    case "add_todo":
      const id = getMaxId(todos) + 1;
      const newTodo = { ...action.todo, id };
      return todos.concat([newTodo]);
    case "remove_todo":
      const index = todos.findIndex(matchesProperty("id", action.todo.id));
      return [...todos.slice(0, index), ...todos.slice(index + 1)];
    case "reset_todos":
      return action.todos;
    default:
      return state;
  }
}

export default todos;
*/
const currentUser = 1;

//reducer
function remove_todo(todos, action) {
  const index = todos.findIndex(matchesProperty("id", action.todo.id));
  return [...todos.slice(0, index), ...todos.slice(index + 1)];
}

function reset_todos(todos, action) {
  return action.todos;
}

function add_todo(todos, action) {
  const id = getMaxId(todos) + 1;
  const userId = currentUser;
  const newTodo = { ...action.todo, id, userId };
  return todos.concat([newTodo]);
}

//selectors
function getMaxId(todos) {
  const ids = todos.map(property("id"));
  return Math.max(...ids);
}

function byIdDesc(todo1, todo2) {
  return todo2.id - todo1.id;
}

function queryContainsTodo(query, todo) {
  if (query && query.text) {
    return todo.title.includes(query.text);
  }
  return true;
}

function toTodoView(users, todo) {
  const userName = users[todo.userId].name;
  return Object.freeze({ ...todo, userName });
}

function getBy(todos, query, users) {
  return todos
    .filter(partial(queryContainsTodo, query))
    .map(partial(toTodoView, users))
    .sort(byIdDesc);
}

//export
const { reducer, actionTypes } = createReducerAndActionTypes(
  { remove_todo, reset_todos, add_todo },
  []
);

export default reducer;
export { actionTypes };
export { getBy };
