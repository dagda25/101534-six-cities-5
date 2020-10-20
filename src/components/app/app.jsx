import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";


const App = (props) => {
  const {offers, reviews, cities} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <MainPage
              offers={offers}
              cities={cities}
            />
          )}
        />
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route
          exact path="/favorites"
          render={() => (
            <FavoritesPage
              offers={offers}
            />
          )}
        />
        <Route exact path="/offer/:id?"
          render={({match}) => {
            const {id} = match.params;
            return (
              <OfferPage
                offer={offers.find((item) => item.id === +id)}
                offers={offers}
                reviews={reviews}
              />
            );
          }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersList: state.offersList,
  activeCardID: state.activeCardID
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOfferList(question, answer) {
    dispatch(ActionCreator.getOfferList(question, answer));
  },
  changeActiveCard() {
    dispatch(ActionCreator.changeActiveCard());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
