import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Settings = {
  OFFER_COUNT: 312
};

ReactDOM.render(
    <App
      offerCount={Settings.OFFER_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
