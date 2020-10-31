import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../utils/const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(ActionCreator.getOfferList(data));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
