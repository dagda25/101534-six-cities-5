import {ActionType} from "./action";
import offers from "../mocks/offers";
import {extend} from "../utils";

const initialState = {
  city: `Amsterdam`,
  offersList: offers.filter((offer) => offer.location === `Amsterdam`),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFER_LIST:


      return state;
  }

  return state;
};


export {reducer};
