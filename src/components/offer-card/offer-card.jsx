import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const OfferCard = (props) => {
  const {offer, changeActiveCard} = props;

  const {title, images, price, type, id, is_premium: isPremium} = offer;


  return (
    <article className="cities__place-card place-card" data-id={id} onMouseEnter={(evt) => changeActiveCard(evt)} onMouseOut={() => changeActiveCard(null)}>
      {isPremium ?
        <div className="place-card__mark">
          <span> Premium </span>
        </div> : null}
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.object,
  handleMouseOver: PropTypes.func,
  handleMouseOut: PropTypes.func,
  changeActiveCard: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(evt) {
    dispatch(ActionCreator.changeActiveCard(evt));
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
