import React from "react";
import renderer from "react-test-renderer";
import ReviewList from "./review-list";
import store from "../../store/store";
import {Provider} from "react-redux";

const reviews = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    "avatar_url": `img/1.png`,
    "id": 4,
    "is_pro": false,
    "name": `Max`
  }
}];


describe(`Render Review list`, () => {
  it(`Render Review list`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewList
              reviews={reviews}
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

