import {ActionType} from "./action";
//import offers from "../mocks/offers";
import {extend} from "../utils/utils";

const initialState = {
  currentCity: `Paris`,
  offersList: [],
  currentCityOffers: [],
  activeCardID: null,
  currentSorting: `Popular`,
  isSortingMenuOpened: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentCityOffers: state.offersList.filter((offer) => offer.city.name === action.payload),
      });

    case ActionType.GET_OFFER_LIST:
      return extend(state, {
        offersList: action.payload,
        currentCityOffers: action.payload.filter((offer) => offer.city.name === state.currentCity),
      });
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
