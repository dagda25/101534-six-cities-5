import {ActionType} from "./action";
import offers from "../mocks/offers";
import {extend} from "../utils";

const initialState = {
  currentCity: `Paris`,
  offersList: offers.filter((offer) => offer.location === `Paris`),
  activeCardID: null,
  currentSorting: `popular`
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
    default:
      return state;
  }

};


export {reducer};
