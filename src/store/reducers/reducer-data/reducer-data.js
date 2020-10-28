import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  offersList: [],
  currentCityOffers: [],
  currentCity: `Paris`,
};

const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFER_LIST:
      return extend(state, {
        offersList: action.payload,
        currentCityOffers: action.payload.filter((offer) => offer.city.name === state.currentCity),
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentCityOffers: state.offersList.filter((offer) => offer.city.name === action.payload),
      });
    default:
      return state;
  }

};


export {reducerData};
