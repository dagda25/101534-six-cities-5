import {ActionType} from "./action";
import offers from "../mocks/offers";
import {extend} from "../utils";

const initialState = {
  currentCity: `Paris`,
  offersList: offers.filter((offer) => offer.location === `Paris`),
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
    default:
      return state;
  }

};


export {reducer};
