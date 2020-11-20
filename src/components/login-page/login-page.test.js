import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "./login-page";
import store from "../../store/store";
import {Provider} from "react-redux";

const onSubmit = () => {};

describe(`Render Login Page`, () => {
  it(`Render Login Page`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <LoginPage onSubmit={onSubmit}/>
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
