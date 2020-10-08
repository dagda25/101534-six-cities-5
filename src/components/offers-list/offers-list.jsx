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

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const offers = this.props.offers;
    const onCardClick = this.props.onCardClick;

    const isActive = (id) => {
      return id === this.state.activeCard;
    };

    const handleMouseOver = (evt) => {
      this.setState({activeCard: +evt.target.closest(`article`).dataset.id});
    };
    const handleMouseOut = () => {
      this.setState({activeCard: null});
    };

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard offer={offer} active={isActive(offer.id)} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} key={offer.id} onCardClick={onCardClick}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  offers: PropTypes.array.isRequired,
  onCardClick: PropTypes.func
};

export default OffersList;
