import { all, call, put, takeEvery } from "redux-saga/effects";
import { GET_SPORT_SETTING } from "../../actions/types";
import { getSportSettingSuccess, getSportSettingFailure } from "../../actions";
import API from "../../../utils/api";

function* getSportSettingRequest(action) {
  console.log(action, "get-sport-saga -sett");
  console.log(action?.payload?.sportsId, "get-action?.payload?.sportsId-saga -sett");
  try {
    const { data } = yield API.get(
      `/admin/setting?sportsId=${action?.payload?.sportsId}`
    );
    if (data.meta.code === 200) {
      yield put(getSportSettingSuccess(data?.data));
      yield call(action.payload.callback, data.data);
    } else if (data.meta.code !== 200) {
      yield put(getSportSettingFailure());
    }
  } catch (error) {
    yield put(getSportSettingFailure());
  }
}

export function* watchgetSportSettingAPI() {
  yield takeEvery(GET_SPORT_SETTING, getSportSettingRequest);
}

export default function* rootSaga() {
  yield all([watchgetSportSettingAPI()]);
}
