import * as Gateway from "../api-gateways/TodoGateway";
import * as StoreActions from "../actions/TodoStoreActions";

function fetchAndResetTodos() {
  return function(dispatch) {
    return Gateway.fetchTodos().then(data =>
      dispatch(StoreActions.resetTodos(data))
    );
  };
}

function fetchAddTodo(todo) {
  return function(dispatch) {
    return Gateway.add(todo).then(data => dispatch(StoreActions.addTodo(todo)));
  };
}

function fetchRemoveTodo(todo) {
  return function(dispatch) {
    return Gateway.remove(todo).then(data =>
      dispatch(StoreActions.removeTodo(todo))
    );
  };
}

export { fetchAndResetTodos, fetchRemoveTodo, fetchAddTodo };
