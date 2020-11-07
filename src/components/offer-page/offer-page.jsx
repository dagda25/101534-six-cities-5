import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import ReviewForm from "../review-form/review-form";
import Header from "../header/header";
import Map from "../map/map";
import ReviewList from "../review-list/review-list";
import {AuthorizationStatus} from "../../utils/const";
import {connect} from "react-redux";
import {fetchReview, fetchFavoriteStatus} from "../../store/api-actions";
import {store} from "../../index";


const OfferPage = (props) => {

  const {offer, authorizationStatus, postReview, nearByOffers, activeCardID, userName} = props;

  const {title, images, price, rating, is_premium: isPremium, bedrooms, goods, max_adults: adults, id, host, description, type} = offer;
  let {is_favorite: isFavorite} = offer;
  const [status, setStatus] = React.useState(isFavorite ? 1 : 0);
  const reviews = props.reviews;

  const handleFavoriteClick = () => {
    setStatus((prev) => (prev ? 0 : 1));

    store.dispatch(fetchFavoriteStatus(id, status === 1 ? 0 : 1)).then(
        isFavorite = !isFavorite
    );
  };

  return (
    <React.Fragment>
      <Header authorizationStatus={authorizationStatus} userName={userName}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => {
                return (
                  <div className="property__image-wrapper" key={i}>
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={status ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`} onClick={handleFavoriteClick} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating / 5 * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item, i) => {
                      return (
                        <li className="property__inside-item" key={i}>
                          {item}
                        </li>);
                    })
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={host.isPro ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  <ReviewList reviews={reviews}/>
                </ul>
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <ReviewForm postReview={postReview} id={id}/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearByOffers} activeCardID={activeCardID}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearByOffers}/>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

OfferPage.propTypes = {
  offer: PropTypes.object.isRequired,
  host: PropTypes.object.isRequired,
  nearByOffers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  postReview: PropTypes.func.isRequired,
  activeCardID: PropTypes.number.isRequired,
  userName: PropTypes.string,
};

const mapStateToProps = ({USER, DATA, CARD}) => ({
  authorizationStatus: USER.authorizationStatus,
  userName: USER.userName,
  nearByOffers: DATA.nearByOffers,
  activeCardID: CARD.activeCardID,
});

const mapDispatchToProps = (dispatch) => ({
  postReview(id, review) {
    dispatch(fetchReview(id, review));
  },
});

export {OfferPage};

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
