import {
  ActionCreator,
  ActionType,
} from "./action";


describe(`Action creators work correctly`, () => {
  it(`Action creator getOfferList returns correct action`, () => {
    expect(ActionCreator.getOfferList(`data`)).toEqual({
      type: ActionType.GET_OFFER_LIST,
      payload: `data`,
    });
  });

  it(`Action creator getOffer returns correct action`, () => {
    expect(ActionCreator.getOffer(`data`)).toEqual({
      type: ActionType.GET_OFFER,
      payload: `data`,
    });
  });

  it(`Action creator getReviews returns correct action`, () => {
    expect(ActionCreator.getReviews(`data`)).toEqual({
      type: ActionType.GET_REVIEWS,
      payload: `data`,
    });
  });

  it(`Action creator getNearBy returns correct action`, () => {
    expect(ActionCreator.getNearBy(`data`)).toEqual({
      type: ActionType.GET_NEARBY,
      payload: `data`,
    });
  });

  it(`Action creator postReview returns correct action`, () => {
    expect(ActionCreator.postReview(`data`)).toEqual({
      type: ActionType.POST_REVIEW,
      payload: `data`,
    });
  });

  it(`Action creator getFavorites returns correct action`, () => {
    expect(ActionCreator.getFavorites(`data`)).toEqual({
      type: ActionType.GET_FAVORITES,
      payload: `data`,
    });
  });

  it(`Action creator toggleFavoriteStatus returns correct action`, () => {
    expect(ActionCreator.toggleFavoriteStatus(`data`)).toEqual({
      type: ActionType.TOGGLE_FAVORITE_STATUS,
      payload: `data`,
    });
  });

  it(`Action creator redirectToRoute returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`url`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `url`,
    });
  });

  it(`Action creator requireAuthorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`, `test@test.ru`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {status: `AUTH`, email: `test@test.ru`},
    });
  });

  it(`Action creator toggleSortingMenu returns correct action`, () => {
    expect(ActionCreator.toggleSortingMenu()).toEqual({
      type: ActionType.TOGGLE_SORTING_MENU,
    });
  });

  it(`Action creator changeSorting returns correct action`, () => {
    expect(ActionCreator.changeSorting(`default`)).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: `default`,
    });
  });

  it(`Action creator changeActiveCard returns correct action`, () => {
    expect(ActionCreator.changeActiveCard()).toEqual({
      type: ActionType.CHANGE_ACTIVE_CARD,
      payload: 0,
    });
  });


});
