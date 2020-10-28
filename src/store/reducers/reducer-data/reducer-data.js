import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  offersList: [],
  currentCityOffers: [],
  currentCity: `Paris`,
  currentSorting: `Popular`,
  isSortingMenuOpened: false
};

const sort = (state, sortBy) => {
  switch (sortBy) {
    case `Price: low to high`:
      return state.currentCityOffers.sort((a, b) => (a.price - b.price));
    case `Price: high to low`:
      return state.currentCityOffers.sort((a, b) => (b.price - a.price));
    case `Top rated first`:
      return state.currentCityOffers.sort((a, b) => (b.rating - a.rating));
    case `Popular`:
      return state.offersList.filter((offer) => offer.city.name === state.currentCity);
    default:
      return state;
  }

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
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        currentSorting: action.payload,
        currentCityOffers: sort(state, action.payload),
        isSortingMenuOpened: false
      });
    case ActionType.TOGGLE_SORTING_MENU:
      return extend(state, {
        isSortingMenuOpened: !state.isSortingMenuOpened
      });
    default:
      return state;
  }

};


export {reducerData};
