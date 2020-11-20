import {reducerUser} from "./reducer-user";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {login} from "../../api-actions";
import {APIRoute, AppRoute} from "../../../utils/const";
import {AuthorizationStatus} from "../../../utils/const";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducerUser(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userName: null
  });
});

it(`Reducer should update authorizationStatus to "auth" and username to "User"`, () => {
  expect(reducerUser({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status: AuthorizationStatus.AUTH, email: `User`}
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH, userName: `User`
  });
});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const questionLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            email: `test@test.ru`,
            status: `AUTH`
          },
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

});
