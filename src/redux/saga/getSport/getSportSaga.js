import { all, call, put, takeEvery } from "redux-saga/effects";
import { GET_SPORT } from "../../actions/types";
import { getSportSuccess, getSportFailure } from "./../../actions";
import API from "../../../utils/api";

function* getSportRequest(action) {
  try {
    const { data } = yield API.get("api/v1/get-sports-data");
    if (data.meta.code === 200) {
      yield put(getSportSuccess(data));
      yield call(action.payload.callback, data.data);
    } else if (data.meta.code !== 200) {
      yield put(getSportFailure());
      yield call(action?.payload?.errorCallback);
    }
  } catch (error) {
    yield put(getSportFailure());
    yield call(action?.payload?.errorCallback);
  }
}

export function* watchGetSportAPI() {
  yield takeEvery(GET_SPORT, getSportRequest);
}

export default function* rootSaga() {
  yield all([watchGetSportAPI()]);
}
