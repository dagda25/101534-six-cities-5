
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/root-reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "../services/api";
import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../utils/const";
import {redirect} from "../middlewares/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

export default store;
