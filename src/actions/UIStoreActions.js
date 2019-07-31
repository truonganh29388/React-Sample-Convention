import { actionTypes } from "../store/ui";

const { set_query } = actionTypes;

function setQuery(query) {
  return {
    type: set_query,
    query
  };
}

export { setQuery };
