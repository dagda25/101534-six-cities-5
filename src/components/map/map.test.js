import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";

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

const activeCardID = 0;

describe(`Render Map`, () => {
  it(`Render Map`, () => {
    const tree = renderer
      .create(
          <Map offers={offers} activeCardID={activeCardID}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});