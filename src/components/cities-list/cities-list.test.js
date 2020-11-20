import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";

const cities = [
  `Paris`,
  `London`
];

const changeCity = () => {};
const currentCity = `Paris`;

describe(`Render CitiesList`, () => {
  it(`Render CitiesList`, () => {
    const tree = renderer
      .create(
          <CitiesList cities={cities} changeCity={changeCity} currentCity={currentCity}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
