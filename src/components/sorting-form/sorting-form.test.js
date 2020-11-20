import React from "react";
import renderer from "react-test-renderer";
import SortingForm from "./sorting-form";


describe(`Render SortingForm`, () => {
  it(`Render SortingForm`, () => {
    const tree = renderer
      .create(
          <SortingForm
            changeSorting={() => {}}
            currentSorting={`Popular`}
            isMenuOpen={false}
            onToggleClick={() => {}}
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

