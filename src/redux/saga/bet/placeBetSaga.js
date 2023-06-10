import { all, takeEvery, put } from "redux-saga/effects";
import { PLACE_BET } from "../../actions/types";
import { placeBetSuccess, placeBetFailure } from "../../actions";
import API from "../../../utils/api";

function* placeBetRequest(action) {
  try {
    const { data } = yield API.post(""); // change with backend URL
    if (data?.meta?.code === 200) {
      yield put(placeBetSuccess());
    } else if (data?.meta?.code !== 200) {
      yield put(placeBetFailure());
    }
  } catch (error) {
    yield put(placeBetFailure());
  }
}

export function* watchPlaceBetAPI() {
  yield takeEvery(PLACE_BET, placeBetRequest);
}

export default function* rootSaga() {
  yield all([watchPlaceBetAPI()]);
}
