import { all, call, put, takeEvery } from "redux-saga/effects";
import { LOGIN } from "../../actions/types";
import { loginSuccess, loginFailure } from "../../actions";
import API from "../../../utils/api";
import { notifySuccess, notifyWarning } from "../../../utils/helper";

function* loginRequest(action) {
  try {
    const { data } = yield API.post(
      "/api/v1/login",
      action?.payload?.inputValues
    );
    if (data.meta.code === 200) {
      yield put(loginSuccess(data));
      yield call(action.payload.callback, data);
      notifySuccess(data.meta.message);
    } else if (data.meta.code !== 200) {
      yield put(loginFailure());
      notifyWarning(data.meta.message);
    }
  } catch (error) {
    console.log(error, "eerr");
    yield put(loginFailure());
    notifyWarning(error?.response?.data?.message);
  }
}

export function* watchloginAPI() {
  yield takeEvery(LOGIN, loginRequest);
}

export default function* rootSaga() {
  yield all([watchloginAPI()]);
}
