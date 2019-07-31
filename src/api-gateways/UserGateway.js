const url = "https://jsonplaceholder.typicode.com/users";

function toJson(response) {
  return response.json();
}

function fetchUsers() {
  return fetch(url).then(toJson);
}

export { fetchUsers };
