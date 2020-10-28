import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  activeCardID: null,
};

const reducerCard = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_CARD:
      return extend(state, {
        activeCardID: action.payload
      });
    default:
      return state;
  }

};


export {reducerCard};
