import React from "react";
import TodoSearch from "./components/TodoSearch";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoListContainer";

export default function App({ context }) {
  return (
    <div>
      <TodoSearch />
      <TodoAdd />
      <TodoList />
    </div>
  );
}
