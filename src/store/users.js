import createReducerAndActionTypes from "redux-points";

//reducer
function reset_users(usersMap, action) {
  return createMapFrom(action.users);
}

//helpers
function createMapFrom(list) {
  const map = Object.create(null);
  list.forEach(function addToMap(item) {
    map[item.id] = item;
  });
  return map;
}

//export
const { reducer, actionTypes } = createReducerAndActionTypes(
  { reset_users },
  {}
);
export default reducer;
export { actionTypes };
