export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_OFFER_LIST`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  TOGGLE_SORTING_MENU: `TOGGLE_SORTING_MENU`
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
};
