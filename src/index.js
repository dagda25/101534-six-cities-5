import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  OFFER_COUNT: 312
};

ReactDOM.render(
    <App offerCount={Settings.OFFER_COUNT}/>,
    document.querySelector(`#root`)
);
