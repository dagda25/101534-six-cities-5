import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import Header from "../header/header";

const FavoritesPage = (props) => {
  const {offers, authorizationStatus, userName} = props;

  const locations = offers.map((offer) => {
    return offer.city.name;
  });

  const filteredLocations = Array.from(new Set(locations));

  return (
    <React.Fragment>
      <Header authorizationStatus={authorizationStatus} userName={userName}/>
      {offers.length ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {filteredLocations.map((location, i) => {
                  return (
                    <li className="favorites__locations-items" key={i}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{location}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offers.map((offer) => {
                          return offer.city.name === location ? <OfferCard offer={offer} key={offer.id}/> : ``;
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </main>
        :
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
          </div>
        </main>
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  }),
  offers: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

export default FavoritesPage;
