import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {offerPropTypes} from "../../utils/prop-types";

const OffersList = (props) => {
  const {offers, authorizationStatus} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} authorizationStatus={authorizationStatus}/>
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default OffersList;
