import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {connect} from "react-redux";
import {fetchFavorites} from "../../store/api-actions";
import store from "../../store/store";
import browserHistory from "../../browser-history";

const Header = (props) => {
  const {authorizationStatus, userName} = props;

  const redirectToFavorites = (evt) => {
    evt.preventDefault();
    store.dispatch(fetchFavorites());
  };

  const redirectToRoot = (evt) => {
    evt.preventDefault();
    browserHistory.push(AppRoute.ROOT);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="/" onClick={redirectToRoot}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <a className="header__nav-link header__nav-link--profile" href="#" onClick={redirectToFavorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userName}</span>
                  </a>
                }
                {authorizationStatus === AuthorizationStatus.NO_AUTH &&
                  <a className="header__nav-link header__nav-link--profile" href="/login">
                    Sign in
                  </a>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string,
  userName: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites() {
    dispatch(fetchFavorites());
  },
});

export {Header};
export default connect(null, mapDispatchToProps)(Header);
