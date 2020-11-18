import {reducerData} from "./reducer-data";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {fetchOffersList, fetchFavorites, fetchReviews, fetchNearBy} from "../../api-actions";
import {APIRoute} from "../../../utils/const";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducerData(void 0, {})).toEqual({
    offersList: [],
    currentCityOffers: [],
    currentCity: `Paris`,
    currentSorting: `Popular`,
    currentOffer: {},
    currentOfferReviews: [],
    isSortingMenuOpened: false,
    nearByOffers: [],
    favorites: [],
  });
});

describe(`Reducer should toggle isSortingMenuOpened property`, () => {
  it(`Reducer should change property to true`, () => {
    expect(reducerData({
      isSortingMenuOpened: false,
    }, {
      type: ActionType.TOGGLE_SORTING_MENU,
    })).toEqual({
      isSortingMenuOpened: true,
    });
  });

  it(`Reducer should change property to false`, () => {
    expect(reducerData({
      isSortingMenuOpened: true,
    }, {
      type: ActionType.TOGGLE_SORTING_MENU,
    })).toEqual({
      isSortingMenuOpened: false,
    });
  });
}
);

describe(`Reducer should change sorting correctly`, () => {
  it(`Reducer should change sorting to agiven value`, () => {
    expect(reducerData({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Default`,
      currentOffer: {},
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [],
    }, {
      type: ActionType.CHANGE_SORTING,
      payload: `Popular`,
    })).toEqual({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Popular`,
      currentOffer: {},
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [],
    });
  });

}
);

describe(`Reducer should change city correctly`, () => {
  it(`Reducer should change city to a given value`, () => {
    expect(reducerData({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Popular`,
      currentOffer: {},
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Cologne`,
    })).toEqual({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Cologne`,
      currentSorting: `Popular`,
      currentOffer: {},
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [],
    });
  });
}
);

describe(`Reducer should toggle favorite status correctly`, () => {

  it(`Reducer should toggle favorite status correctly`, () => {
    expect(reducerData({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Popular`,
      currentOffer: {},
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [{id: 1}, {id: 2}],
    }, {
      type: ActionType.TOGGLE_FAVORITE_STATUS,
      payload: 1
    })).toEqual({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Popular`,
      currentOffer: {},
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [{id: 2}],
    });
  });
}
);


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFER_LIST,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/: hotel_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = fetchReviews();

    apiMock
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /hotels/: hotel_id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = fetchNearBy();

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby`)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_NEARBY,
          payload: [{fake: true}],
        });
      });
  });
});


