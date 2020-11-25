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
      favorites: [{id: 1}],
    }, {
      type: ActionType.TOGGLE_FAVORITE_STATUS,
      payload: {id: 2}
    })).toEqual({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Popular`,
      currentOffer: {},
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [{id: 1}, {id: 2}],
    });
  });
}
);

describe(`Reducer should change currentOffer property correctly`, () => {

  it(`Reducer should change currentOffer property to a given value`, () => {
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
      type: ActionType.GET_OFFER,
      payload: {
        bedrooms: 4,
        city: {name: `Brussels`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
        description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        goods: [`Towels`, `Baby seat`, `Laptop friendly workspace`],
        host: {id: `25`, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
        id: `4`,
        images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
        isFavorite: false,
        isPremium: false,
        location: {latitude: 50.839557, longitude: 4.346697, zoom: 16},
        maxAdults: 8,
        previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        price: 300,
        rating: 4.0,
        title: `Amazing and Extremely Central Flat`,
        type: `apartment`,
      }
    })).toEqual({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Popular`,
      currentOffer: {
        bedrooms: 4,
        city: {name: `Brussels`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
        description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        goods: [`Towels`, `Baby seat`, `Laptop friendly workspace`],
        host: {id: `25`, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
        id: `4`,
        images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
        isFavorite: false,
        isPremium: false,
        location: {latitude: 50.839557, longitude: 4.346697, zoom: 16},
        maxAdults: 8,
        previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        price: 300,
        rating: 4.0,
        title: `Amazing and Extremely Central Flat`,
        type: `apartment`,
      },
      currentOfferReviews: [],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [],
    });
  });
}
);

describe(`Reducer should change currentOfferReviews property correctly`, () => {

  it(`Reducer should change currentOfferReviews property to a given value`, () => {
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
      type: ActionType.POST_REVIEW,
      payload: [{
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 4,
        user: {
          avatarUrl: `img/1.png`,
          id: 4,
          isPro: false,
          name: `Max`
        }
      }]
    })).toEqual({
      offersList: [],
      currentCityOffers: [],
      currentCity: `Paris`,
      currentSorting: `Popular`,
      currentOffer: {},
      currentOfferReviews: [{
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 4,
        user: {
          avatarUrl: `img/1.png`,
          id: 4,
          isPro: false,
          name: `Max`
        }
      }],
      isSortingMenuOpened: false,
      nearByOffers: [],
      favorites: [],
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
    const questionLoader = fetchReviews(1);

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
    const questionLoader = fetchNearBy(1);

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


