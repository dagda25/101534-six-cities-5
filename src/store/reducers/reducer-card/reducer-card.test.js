import {reducerCard} from "./reducer-card";
import {
  ActionType,
} from "../../action";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducerCard(void 0, {})).toEqual({
    activeCardID: 0,
  });
});

it(`Reducer should change activeCardID to given value`, () => {
  expect(reducerCard({
    activeCardID: 0,
  }, {
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: 1,
  })).toEqual({
    activeCardID: 1,
  });

  expect(reducerCard({
    activeCardID: 0,
  }, {
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: 0,
  })).toEqual({
    activeCardID: 0,
  });
});

