export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_OFFER_LIST`,
};

export const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
    payload: event.target.textContent,
  }),
  getOfferList: () => ({
    type: ActionType.GET_OFFER_LIST,
  }),
};
