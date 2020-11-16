import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../utils/const";
import {AppRoute, APIRoute} from "../utils/const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.getOfferList(data));
    })
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      dispatch(ActionCreator.getFavorites(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FAVORITES)))
    .catch((err) => {
      throw err;
    })
);

export const fetchFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => {
      dispatch(ActionCreator.toggleFavoriteStatus(data.id, data.is_favorite));
    })
    .catch((err) => {
      throw err;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch((err) => {
      throw err;
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then((data) => dispatch(ActionCreator.getOffer(data.data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.OFFER}/${id}`)))
    .catch((err) => {
      throw err;
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.getReviews(data)))
    .catch((err) => {
      throw err;
    })
);

export const fetchNearBy = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then((data) => dispatch(ActionCreator.getNearBy(data.data)))
    .catch((err) => {
      throw err;
    })
);

export const fetchReview = (id, {text, rating}, resolve, reject) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment: text, rating})
    .then((data) => {
      dispatch(ActionCreator.postReview(data.data));
      resolve();
    })
    .catch((err) => {
      reject();
      throw err;
    })
);


