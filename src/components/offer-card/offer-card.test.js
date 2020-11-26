import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card";
import store from "../../store/store";
import {Provider} from "react-redux";

const changeActiveCard = () => {};

const authorizationStatus = `AUTH`;
const offer = {
  "bedrooms": 3,
  "city": {name: `Brussels`, location: {latitude: 50.839557, longitude: 4.346697, zoom: 16}},
  "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
  "goods": [`Towels`, `Baby seat`, `Laptop friendly workspace`],
  "host": {"id": 25, "name": `Angelina`, "is_pro": true, "avatar_url": `img/avatar-angelina.jpg`},
  "id": 2,
  "images": [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`],
  "is_favorite": false,
  "is_premium": false,
  "location": {latitude: 50.839557, longitude: 4.346697, zoom: 16},
  "max_adults": 8,
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
  "price": 323,
  "rating": 4.3,
  "title": `Amazing and Extremely Central Flat`,
  "type": `apartment`,
};


describe(`Render OfferCard`, () => {
  it(`Render OfferCard`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <OfferCard
              changeActiveCard={changeActiveCard}
              authorizationStatus={authorizationStatus}
              offer={offer}
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
