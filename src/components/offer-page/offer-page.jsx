import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import ReviewForm from "../review-form/review-form";

const OfferPage = (props) => {
  const offers = props.offers;
  const offer = props.offer;
  const {name, mark, images, price, rating, features, inside} = offer;

  const reviews = props.reviews;

  return (
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
            <div className="property__mark">
              <span>{mark}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {name}
              </h1>
              <button className="property__bookmark-button button" type="button">
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
                {features.entire}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {features.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {features.adults} adults
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
                  inside.map((item, i) => {
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
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="/img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  Angelina
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ul className="reviews__list">
                {
                  reviews.map((review) => {
                    return (
                      <li className="reviews__item" key={review.id}>
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar"/>
                          </div>
                          <span className="reviews__user-name">
                            {review.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `${review.rating / 5 * 100}%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {review.text}
                          </p>
                          <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList offers={offers}/>
          </div>
        </section>
      </div>
    </main>
  );
};

OfferPage.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    features: PropTypes.object.isRequired,
    inside: PropTypes.array.isRequired,
  }),
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default OfferPage;
