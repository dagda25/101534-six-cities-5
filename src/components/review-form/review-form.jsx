import React from "react";
import PropTypes from "prop-types";
import {ReviewLength} from "../../utils/const";
import ErrorMessage from "../error-message/error-message";


const ReviewForm = (props) => {

  const {postReview, id} = props;

  const [rating, setRating] = React.useState(0);

  const [text, setText] = React.useState(``);

  const [disabledSubmit, setDisabledSubmit] = React.useState(true);

  const [disabledInput, setDisabledInput] = React.useState(false);

  const [showErrorMessage, setshowErrorMessage] = React.useState(false);

  const handleSubmit = (evt) => {
    if (evt) {
      evt.preventDefault();
    }

    setDisabledInput(true);
    setDisabledSubmit(true);
    return new Promise((resolve, reject) => {
      postReview(id, {text, rating}, resolve, reject);
    }).then(() => {
      setText(``);
      setRating(0);
      setDisabledInput(false);
      setDisabledSubmit(false);
    }).catch(() => {
      setshowErrorMessage(true);
    });
  };

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setRating(value);
    setDisabledSubmit(text.length <= ReviewLength.MIN || text.length >= ReviewLength.MAX);
  };

  const handleTextAreaChange = (evt) => {
    const {value} = evt.target;
    setText(value);
    setDisabledSubmit(value.length <= ReviewLength.MIN || value.length >= ReviewLength.MAX || !rating);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} disabled="true">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" data-value={rating}>
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleFieldChange}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" disabled={disabledInput} placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextAreaChange} value={text}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabledSubmit}>Submit</button>

      </div>
      {
        showErrorMessage &&
          <ErrorMessage text={`Something went wrong. Click here to hide this message and try again`} onClick={() => setshowErrorMessage(false)}/>
      }
    </form>
  );
};

ReviewForm.propTypes = {
  postReview: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ReviewForm;
