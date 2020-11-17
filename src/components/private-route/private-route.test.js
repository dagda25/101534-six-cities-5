import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./private-route";
import store from "../../store/store";
import {Provider} from "react-redux";


describe(`Render private route`, () => {
  it(`Render private route`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <PrivateRoute
              render={() => {}}
              path={`/`}
              exact={`exact`}
              authorizationStatus={`AUTH`}
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

