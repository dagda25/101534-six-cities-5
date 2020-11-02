import {combineReducers} from "redux";
import {reducerCard} from "./reducer-card/reducer-card";
import {reducerData} from "./reducer-data/reducer-data";
import {reducerUser} from "./reducer-user/reducer-user";

export const NameSpace = {
  DATA: `DATA`,
  CARD: `CARD`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: reducerData,
  [NameSpace.CARD]: reducerCard,
  [NameSpace.USER]: reducerUser,
});
