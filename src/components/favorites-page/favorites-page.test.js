import React from "react";
import renderer from "react-test-renderer";
import FavoritesPage from "./favorites-page";

const offers = [{
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

const authorizationStatus = `AUTH`;
const userName = `User`;

describe(`Render FavoritesPage`, () => {
  it(`Render FavoritesPage`, () => {
    const tree = renderer
      .create(
          <FavoritesPage offers={offers} authorizationStatus={authorizationStatus} userName={userName}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
