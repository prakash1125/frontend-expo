import { all, takeEvery, put, call } from "redux-saga/effects";
import { PLACE_BET } from "../../actions/types";
import { placeBetSuccess, placeBetFailure } from "../../actions";
import API from "../../../utils/api";
import { notifySuccess, notifyWarning, notifyError } from "../../../utils/helper";


function* placeBetRequest(action) {
  try {
    const { data } = yield API.post("api/v1/bet-sport", action?.payload?.data); // change with backend URL
    if (data?.meta?.code === 200) {
      yield put(placeBetSuccess(data));
      yield call(action?.payload?.callback, data);
      notifySuccess(data.meta.message);
    } else if (data?.meta?.code !== 200) {
      yield put(placeBetFailure());

      notifyWarning(data.meta.message);    }
  } catch (error) {
    console.log(error);
    yield put(placeBetFailure());
  }
}

export function* watchPlaceBetAPI() {
  yield takeEvery(PLACE_BET, placeBetRequest);
}

export default function* rootSaga() {
  yield all([watchPlaceBetAPI()]);
}
