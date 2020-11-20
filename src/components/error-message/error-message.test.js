import React from "react";
import renderer from "react-test-renderer";
import ErrorMessage from "./error-message";

const text = `test`;
const onClick = () => {};
describe(`Render ErrorMessage`, () => {
  it(`Render ErrorMessage`, () => {
    const tree = renderer
      .create(
          <ErrorMessage text={text} onClick={onClick}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
