import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {fetchOffer, fetchReviews, fetchNearBy, fetchFavoriteStatus, fetchOffersList} from "../../store/api-actions";
import store from "../../store/store";
import {AuthorizationStatus, AppRoute, favoriteStatus} from "../../utils/const";
import browserHistory from "../../browser-history";

const OfferCard = (props) => {
  const {offer, changeActiveCard, authorizationStatus} = props;

  const {title, images, price, type, id, is_premium: isPremium, rating} = offer;
  let {is_favorite: isFavorite} = offer;

  const handleClick = (evt) => {
    evt.preventDefault();

    Promise.all([
      fetchReviews(id), fetchOffer(id), fetchNearBy(id)
    ])
    .then(([reviews, offers, nearByOffers]) => {
      store.dispatch(offers);
      store.dispatch(reviews);
      store.dispatch(nearByOffers);
    });

    window.scrollTo(0, 0);
  };

  const handleFavoriteClick = (evt) => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      browserHistory.push(AppRoute.LOGIN);
    }
    evt.currentTarget.classList.toggle(`place-card__bookmark-button--active`);

    store.dispatch(fetchFavoriteStatus(id, isFavorite ? favoriteStatus.OFF : favoriteStatus.ON)).then(
        store.dispatch(fetchOffersList())
    ).then(
        isFavorite = isFavorite ? false : true
    );

  };


  return (
    <article className="cities__place-card place-card" data-id={id} onMouseEnter={(evt) => changeActiveCard(evt)} onMouseLeave={() => changeActiveCard(null)}>
      {isPremium ?
        <div className="place-card__mark">
          <span> Premium </span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={handleClick}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`}
            onClick={(evt) => {
              handleFavoriteClick(evt);
            }}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={handleClick}>{title}</a>
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
  fetchOffer: PropTypes.func,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = ({USER}) => ({
  userName: USER.userName,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(evt) {
    dispatch(ActionCreator.changeActiveCard(evt));
  },
  fetchOffer(id) {
    dispatch(fetchOffer(id));
  },
  fetchFavoriteStatus(id, status) {
    dispatch(fetchFavoriteStatus(id, status));
  },
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
