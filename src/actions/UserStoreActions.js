import { actionTypes } from "../store/users";

const { reset_users } = actionTypes;

function resetUsers(users) {
  return {
    type: reset_users,
    users
  };
}

export { resetUsers };
