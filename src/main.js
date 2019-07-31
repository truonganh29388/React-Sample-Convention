import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store";
import thunk from "redux-thunk";

import "./styles.css";
import App from "./App.jsx";
import { fetchAndResetTodos } from "./middleware/TodoMiddlewareActions";
import { fetchAndResetUsers } from "./middleware/UserMiddlewareActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store
  .dispatch(fetchAndResetUsers())
  .then(() => store.dispatch(fetchAndResetTodos()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
