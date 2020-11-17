import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page";
import store from "../../store/store";
import {Provider} from "react-redux";

const changeCity = () => {};
const changeSorting = () => {};
const currentSorting = `Popular`;
const currentCity = `Paris`;
const offersList = [{
  bedrooms: 3,
  city: {name: `Brussels`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
  description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
  goods: [`Towels`, `Baby seat`, `Laptop friendly workspace`],
  host: {id: 25, name: `Angelina`, isPro: true, avatarUrl: `img/avatar-angelina.jpg`},
  id: 2,
  images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
  isFavorite: false,
  isPremium: false,
  location: {latitude: 50.839557, longitude: 4.346697, zoom: 16},
  maxAdults: 8,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
  price: 323,
  rating: 4.3,
  title: `Amazing and Extremely Central Flat`,
  type: `apartment`,
}];

const currentCityOffers = offersList;

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const authorizationStatus = `AUTH`;
const userName = `User`;
const activeCardID = 0;


describe(`Render Main Page`, () => {
  it(`Render Main Page`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MainPage
              changeCity={changeCity}
              changeSorting={changeSorting}
              currentSorting={currentSorting}
              currentCity={currentCity}
              offers={offersList}
              currentCityOffers={currentCityOffers}
              cities={cities}
              authorizationStatus={authorizationStatus}
              userName={userName}
              activeCardID={activeCardID}
            />
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
