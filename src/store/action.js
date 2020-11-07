export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_OFFER_LIST`,
  GET_OFFER: `GET_OFFER`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  TOGGLE_SORTING_MENU: `TOGGLE_SORTING_MENU`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_NEARBY: `GET_NEARBY`,
  POST_REVIEW: `POST_REVIEW`,
};

export const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
    payload: event.target.textContent,
  }),
  getOfferList: (data) => ({
    type: ActionType.GET_OFFER_LIST,
    payload: data
  }),
  getOffer: (data) => ({
    type: ActionType.GET_OFFER,
    payload: data
  }),
  getReviews: (data) => ({
    type: ActionType.GET_REVIEWS,
    payload: data
  }),
  getNearBy: (data) => ({
    type: ActionType.GET_NEARBY,
    payload: data
  }),
  postReview: (data) => ({
    type: ActionType.POST_REVIEW,
    payload: data
  }),
  changeActiveCard: (evt) => {
    return evt ? {
      type: ActionType.CHANGE_ACTIVE_CARD,
      payload: evt.currentTarget.dataset.id
    } :
      {
        type: ActionType.CHANGE_ACTIVE_CARD,
        payload: 0
      };
  },
  changeSorting: (type) => {
    return {
      type: ActionType.CHANGE_SORTING,
      payload: type,
    };
  },
  toggleSortingMenu: () => {
    return {
      type: ActionType.TOGGLE_SORTING_MENU,
    };
  },
  requireAuthorization: (status, email) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status, email},
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
