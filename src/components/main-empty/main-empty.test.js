import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";

const currentCity = `Paris`;

describe(`Render MainEmpty`, () => {
  it(`Render Main Empty`, () => {
    const tree = renderer
      .create(
          <MainEmpty currentCity={currentCity}/>,
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
