import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";
import {login} from "../../store/api-actions";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../utils/const";


const App = (props) => {
  const {offers, reviews, cities, onSubmit} = props;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact path={AppRoute.ROOT}
          render={() => (
            <MainPage
              offers={offers}
              cities={cities}
            />
          )}
        />
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage onSubmit={onSubmit}/>
        </Route>
        <Route
          exact path={AppRoute.FAVORITES}
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
                reviews={reviews.filter((item) => item.offerId === +id)}
              />
            );
          }} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  currentCityOffers: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, CARD, USER}) => ({
  currentCity: DATA.currentCity,
  offersList: DATA.offersList,
  activeCardID: CARD.activeCardID,
  currentCityOffers: DATA.currentCityOffers,
  offers: DATA.offersList,
  authorizationStatus: USER.authorizationStatus,
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
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
