import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import Header from "../header/header";

const FavoritesPage = (props) => {
  const {offers} = props;

  const locations = offers.map((offer) => {
    return offer.location;
  });

  const filteredLocations = Array.from(new Set(locations));

  return (
    <React.Fragment>
      <Header/>
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
                        return offer.location === location ? <OfferCard offer={offer} key={offer.id}/> : ``;
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>

          </section>
        </div>
      </main>
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
};

export default FavoritesPage;
