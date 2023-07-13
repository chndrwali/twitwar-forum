import { ActionType } from './action';

function usersReducer(register = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.register;
    default:
      return register;
  }
}

export default usersReducer;