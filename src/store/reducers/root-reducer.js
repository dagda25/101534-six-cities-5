import {combineReducers} from "redux";
import {reducerCard} from "./reducer-card/reducer-card";
import {reducerData} from "./reducer-data/reducer-data";

export const NameSpace = {
  DATA: `DATA`,
  CARD: `CARD`,
};

export default combineReducers({
  [NameSpace.DATA]: reducerData,
  [NameSpace.CARD]: reducerCard,
});
