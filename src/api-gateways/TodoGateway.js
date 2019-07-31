const url = "https://jsonplaceholder.typicode.com/todos";

function toJson(response) {
  return response.json();
}

function fetchTodos() {
  return fetch(url).then(toJson);
}

function remove(todo) {
  const uniqueUrl = `${url}/${todo.id}`;
  return fetch(uniqueUrl, {
    method: "DELETE"
  }).then(toJson);
}

function add(todo) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(todo)
  }).then(toJson);
}

export { fetchTodos, add, remove };
