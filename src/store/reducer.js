import {ActionType} from "./action";
import offers from "../mocks/offers";
import {extend} from "../utils/utils";

const initialState = {
  currentCity: `Paris`,
  offersList: offers.filter((offer) => offer.location === `Paris`),
  activeCardID: null,
  currentSorting: `Popular`,
  isSortingMenuOpened: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        offersList: offers.filter((offer) => offer.location === action.payload),
      });

    case ActionType.GET_OFFER_LIST:
      return state;
    case ActionType.CHANGE_ACTIVE_CARD:
      return extend(state, {
        activeCardID: action.payload
      });
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


export {reducer};
