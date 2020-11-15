import React from "react";
import renderer from "react-test-renderer";
import ErrorPage from "./error-page";


describe(`Render ErrorPage`, () => {
  it(`Render ErrorPage`, () => {
    const tree = renderer
      .create(
          <ErrorPage />,
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
