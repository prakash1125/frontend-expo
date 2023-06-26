import { all, call, put, takeEvery } from "redux-saga/effects";
import { CHIP_SETTING } from "../../actions/types";
import { chipSettingSuccess, chipSettingFailure } from "../../actions";
import API from "../../../utils/api";
import { notifySuccess, notifyWarning, notifyError } from "../../../utils/helper";

function* chipSettingRequest(action) {
  try {
    console.log(action.payload,"payload");
    const { data } = yield API.post(
      "/api/v1/chip-Setting",
      action?.payload?.chip
    );
    console.log(data, "-----------------------------data----------------------------------");
    if (data.meta.code === 200) {
      yield put(chipSettingSuccess(data?.data));
      yield call(action.payload.callback, data);
      notifySuccess(data.meta.message);
    } else if (data.meta.code !== 200) {
      yield put(chipSettingFailure());
      yield call(action.payload.errorCallback, data);
      notifyWarning(data.meta.message);
    }
  } catch (error) {
    console.log(error, "eerr");
    yield call(action.payload.errorCallback, error?.response?.data);
    yield put(chipSettingFailure());
  }
}

export function* watchchipSettingAPI() {
  yield takeEvery(CHIP_SETTING, chipSettingRequest);
}

export default function* rootSaga() {
  yield all([watchchipSettingAPI()]);
}
