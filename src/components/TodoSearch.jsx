import React, { useState } from "react";
import { connect } from "react-redux";
import * as ActionCreators from "../actions/UIStoreActions";

function TodoSearch({ dispatch }) {
  const [query, setQuery] = useState({ text: "" });

  function handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value });
    setQuery(newQuery);
  }

  function searchBy() {
    dispatch(ActionCreators.setQuery(query));
  }

  return (
    <form className="form">
      <input type="text" onChange={handleChange} value={query.text} />
      <button onClick={searchBy} type="button">
        Search
      </button>
    </form>
  );
}

export default connect()(TodoSearch);
