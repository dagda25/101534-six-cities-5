export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_OFFER_LIST`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  CHANGE_SORTING: `CHANGE_SORTING`
};

export const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
    payload: event.target.textContent,
  }),
  getOfferList: () => ({
    type: ActionType.GET_OFFER_LIST,
  }),
  changeActiveCard: (evt) => {
    return evt ? {
      type: ActionType.CHANGE_ACTIVE_CARD,
      payload: evt.currentTarget.dataset.id
    } :
      {
        type: ActionType.CHANGE_ACTIVE_CARD,
        payload: null
      };
  },
  changeSorting: (evt) => {
    return {
      type: ActionType.CHANGE_SORTING,
      payload: evt.target.value,
    };
  }
};
