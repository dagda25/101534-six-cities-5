import {AuthorizationStatus} from "../../../utils/const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userName: null
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload.status,
        userName: action.payload.email,
      });
  }

  return state;
};

export {reducerUser};
