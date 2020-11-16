import React from "react";
import {Months} from "../../utils/const";
import PropTypes from "prop-types";


const ReviewList = (props) => {
  const getDate = (date) => {
    const reviewDate = new Date(date);
    return `${Months[reviewDate.getMonth()]} ${reviewDate.getFullYear()}`;
  };

  let {reviews} = props;
  reviews = reviews.slice(0, 10).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.length ?
        reviews.map((review) => {
          return (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  {review.user.name}
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
                  {review.comment}
                </p>
                <time className="reviews__time" dateTime="2019-04-24">{getDate(review.date)}</time>
              </div>
            </li>
          );
        }) : null}
    </ul>
      </>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
