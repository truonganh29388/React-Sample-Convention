import createReducerAndActionTypes from "redux-points";

function set_query(state, action) {
  return {
    ...state,
    query: action.query
  };
}

//export
const { reducer, actionTypes } = createReducerAndActionTypes({ set_query }, {});
export default reducer;
export { actionTypes };
