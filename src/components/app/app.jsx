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
import PrivateRoute from "../private-route/private-route";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {offerPropTypes, reviewPropTypes} from "../../utils/prop-types";


const App = (props) => {
  const {offers, cities, onSubmit, currentOfferReviews, favorites, authorizationStatus, userName} = props;

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
        <Route exact path={AppRoute.LOGIN}
          render={() => (
            authorizationStatus === AuthorizationStatus.AUTH
              ? <Redirect to={AppRoute.ROOT} />
              :
              <LoginPage onSubmit={onSubmit}/>
          )}
        />

        <PrivateRoute
          exact path={AppRoute.FAVORITES}
          render={() => (
            <FavoritesPage
              offers={favorites}
              authorizationStatus={authorizationStatus}
              userName={userName}
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
                reviews={currentOfferReviews}
                id={id}
              />
            );
          }} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  "offers": PropTypes.arrayOf(offerPropTypes).isRequired,
  "favorites": PropTypes.arrayOf(offerPropTypes).isRequired,
  "cities": PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  "currentCityOffers": PropTypes.arrayOf(offerPropTypes).isRequired,
  "onSubmit": PropTypes.func.isRequired,
  "currentOfferReviews": PropTypes.arrayOf(reviewPropTypes).isRequired,
  "authorizationStatus": PropTypes.string.isRequired,
  "userName": PropTypes.string,
};

const mapStateToProps = ({DATA, CARD, USER}) => ({
  currentCity: DATA.currentCity,
  offersList: DATA.offersList,
  activeCardID: CARD.activeCardID,
  currentCityOffers: DATA.currentCityOffers,
  currentOfferReviews: DATA.currentOfferReviews,
  offers: DATA.offersList,
  authorizationStatus: USER.authorizationStatus,
  userName: USER.userName,
  favorites: DATA.favorites,
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
