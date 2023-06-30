import { all, call, put, takeEvery } from "redux-saga/effects";
import { GET_CHIP_SETTING } from "../../actions/types";
import { getChipSettingSuccess, getChipSettingFailure } from "../../actions";
import API from "../../../utils/api";

function* getChipSettingRequest(action) {
  try {
    const { data } = yield API.get(
      //   `admin/get-runners-data?marketId=${action?.payload?.id}`
      `/api/v1/chip-Setting`
    );
    if (data.meta.code === 200) {
      yield put(getChipSettingSuccess(data));
      yield call(action.payload.callback, data.data);
    } else if (data.meta.code !== 200) {
      yield put(getChipSettingFailure());
    }
  } catch (error) {
    yield put(getChipSettingFailure());
  }
}

export function* watchgetChipSettingAPI() {
  yield takeEvery(GET_CHIP_SETTING, getChipSettingRequest);
}

export default function* rootSaga() {
  yield all([watchgetChipSettingAPI()]);
}
