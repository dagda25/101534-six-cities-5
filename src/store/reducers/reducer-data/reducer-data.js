import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  offersList: [],
  currentCityOffers: [],
  currentCity: `Paris`,
  currentSorting: `Popular`,
  currentOffer: {},
  currentOfferReviews: [],
  isSortingMenuOpened: false,
  nearByOffers: [],
};

export const SortingType = {
  POPULAR: `Popular`,
  TOP_RATED_FIRST: `Top rated first`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
};

const sort = (state, sortBy) => {
  switch (sortBy) {
    case SortingType.PRICE_LOW_TO_HIGH:
      return state.currentCityOffers.sort((a, b) => (a.price - b.price));
    case SortingType.PRICE_HIGH_TO_LOW:
      return state.currentCityOffers.sort((a, b) => (b.price - a.price));
    case SortingType.TOP_RATED_FIRST:
      return state.currentCityOffers.sort((a, b) => (b.rating - a.rating));
    case SortingType.POPULAR:
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
    case ActionType.GET_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionType.GET_REVIEWS:
      return extend(state, {
        currentOfferReviews: action.payload,
      });
    case ActionType.GET_NEARBY:
      return extend(state, {
        nearByOffers: action.payload,
      });
    case ActionType.POST_REVIEW:
      return extend(state, {
        currentOfferReviews: action.payload,
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
