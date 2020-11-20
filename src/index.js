import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {cities} from "./utils/const";
import {fetchOffersList} from "./store/api-actions";
import ErrorPage from "./components/error-page/error-page";
import store from "./store/store";

store.dispatch(fetchOffersList()).then(

    ReactDOM.render(
        <Provider store={store}>
          <App cities={cities}/>
        </Provider>,
        document.querySelector(`#root`)
    )

).catch(() => {
  ReactDOM.render(
      <Provider store={store}>
        <ErrorPage/>
      </Provider>
      ,
      document.querySelector(`#root`)
  );
}
);
