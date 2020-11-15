import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";


const authorizationStatus = `AUTH`;
const userName = `User`;

describe(`Render Header`, () => {
  it(`Render Header`, () => {
    const tree = renderer
      .create(
          <Header authorizationStatus={authorizationStatus} userName={userName} fetchFavorites={() => {}}/>,
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
