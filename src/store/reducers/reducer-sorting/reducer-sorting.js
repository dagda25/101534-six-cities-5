import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  currentSorting: `Popular`,
  isSortingMenuOpened: false
};

const reducerSorting = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        currentSorting: action.payload
      });
    case ActionType.TOGGLE_SORTING_MENU:
      return extend(state, {
        isSortingMenuOpened: !state.isSortingMenuOpened
      });
    default:
      return state;
  }

};


export {reducerSorting};
