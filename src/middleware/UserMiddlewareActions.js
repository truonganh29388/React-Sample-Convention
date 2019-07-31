import * as Gateway from "../api-gateways/UserGateway";
import * as StoreActions from "../actions/UserStoreActions";

function fetchAndResetUsers() {
  return function(dispatch) {
    return Gateway.fetchUsers().then(data =>
      dispatch(StoreActions.resetUsers(data))
    );
  };
}

export { fetchAndResetUsers };
