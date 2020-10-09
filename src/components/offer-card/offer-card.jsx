import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const OfferCard = (props) => {
  const {offer, handleMouseOver, handleMouseOut} = props;
  const {name, mark, images, price, type, id} = offer;

  return (
    <article className="cities__place-card place-card" data-id={id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }
  ),
  handleMouseOver: PropTypes.func,
  handleMouseOut: PropTypes.func,
  onCardClick: PropTypes.func,
};


export default OfferCard;
