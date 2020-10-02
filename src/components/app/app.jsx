import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";


const App = (props) => {
  const {offerCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offerCount={offerCount} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id?">
          <OfferPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {offerCount: PropTypes.number.isRequired};
