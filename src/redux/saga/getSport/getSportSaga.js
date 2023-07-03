import { all, call, put, takeEvery } from "redux-saga/effects";
import { GET_SPORT } from "../../actions/types";
import { getSportSuccess, getSportFailure } from "./../../actions";
import API from "../../../utils/api";

function* getSportRequest(action) {
  try {
    let response;
    if (action?.payload?.auth) {
      const { data } = yield API.get("api/v1/get-sports-data-authenticate");
      response = data;
    } else {
      const { data } = yield API.get("api/v1/get-sports-data");
      response = data;
    }
    console.log(response, "response - data");
    if (response.meta.code === 200) {
      yield put(getSportSuccess(response));
      yield call(action.payload.callback, response.data);
    } else if (response.meta.code !== 200) {
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
