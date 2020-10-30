import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class OffersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  render() {
    const {offers} = this.props;

    const isActive = (id) => {
      return id === this.state.activeCard;
    };


    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard offer={offer} active={isActive(offer.id)} key={offer.id}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  currentSorting: PropTypes.string.isRequired,
};

export default OffersList;
