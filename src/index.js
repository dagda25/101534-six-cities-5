import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import cities from "./mocks/cities";
import reviews from "./mocks/reviews";
import rootReducer from "./store/reducers/root-reducer";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./utils/const";
import {fetchOffersList} from "./store/api-actions";
import {redirect} from "./middlewares/redirect";
import ErrorPage from "./components/error-page/error-page";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);
store.dispatch(fetchOffersList()).then(

    ReactDOM.render(
        <Provider store={store}>
          <App cities={cities} reviews={reviews}/>
        </Provider>,
        document.querySelector(`#root`)
    )

).catch(() => {
  ReactDOM.render(
      <Provider store={store}>
        <ErrorPage/>
      </Provider>
      ,
      document.querySelector(`#root`));
}
);
