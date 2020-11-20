import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";

const id = 1;
const postReview = () => {};


describe(`Render ReviewForm`, () => {
  it(`Render ReviewForm`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            id={id}
            postReview={postReview}
          />,
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

