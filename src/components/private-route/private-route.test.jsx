import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {Switch, Router} from "react-router-dom";
import browserHistory from "../../browser-history";


const authorizationStatus = `true`;
const path = `/`;
const exact = true;
const render = () => {
  return <div></div>;
};


describe(`Render PrivateRoute correctly`, () => {
  it(`Render PrivateRoute correctly`, () => {
    const tree = renderer
      .create(
          <Router history={browserHistory}>
            <Switch>
              <PrivateRoute authorizationStatus={authorizationStatus} path={path} exact={exact} render={render}/>
            </Switch>
          </Router>,
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

