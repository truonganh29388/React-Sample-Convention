import { connect } from "react-redux";
import { flowRight } from "lodash";
import { fetchRemoveTodo } from "../middleware/TodoMiddlewareActions";
import { getBy } from "../store/todos";
import TodoList from "./TodoList.jsx";

function mapStateToProps(state) {
  return {
    todos: getBy(state.todos, state.ui.query, state.users)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveClick: flowRight([dispatch, fetchRemoveTodo])
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
