import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";


const App = (props) => {
  const {offerCount, offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => (
            <MainPage
              offerCount={offerCount}
              offers={offers}
              onCardClick={() => {
                history.push(`/offer`);
              }}
            />
          )}
        />
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route
          exact path="/favorites"
          render={({history}) => (
            <FavoritesPage
              offers={offers}
              onCardClick={() => {
                history.push(`/offer`);
              }}
            />
          )}
        />
        <Route exact path="/offer/:id?"
          render={({match}) => {
            const {id} = match.params;
            return (
              <OfferPage
                offer={offers.find((item) => item.id === Number(id))}
                offers={offers}
                reviews={reviews}
              />
            );
          }} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};
