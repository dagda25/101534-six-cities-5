import {combineReducers} from "redux";
import {reducerCard} from "./reducer-card/reducer-card";
import {reducerData} from "./reducer-data/reducer-data";
import {reducerSorting} from "./reducer-sorting/reducer-sorting";

export const NameSpace = {
  DATA: `DATA`,
  CARD: `CARD`,
  SORTING: `SORTING`
};

export default combineReducers({
  [NameSpace.DATA]: reducerData,
  [NameSpace.CARD]: reducerCard,
  [NameSpace.SORTING]: reducerSorting,
});
