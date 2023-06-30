import { all, call, put, takeEvery } from "redux-saga/effects";
import { GET_USERDATA } from "../../actions/types";
import { getUserDataSuccess, getUserDataFailure } from "../../actions";
import API from "../../../utils/api";

function* getUserDataRequest(action) {
  try {
    const { data } = yield API.get(`api/v1/getUserData`);
    if (data.meta.code === 200) {
      yield put(getUserDataSuccess(data));
      // yield call(action.payload.callback, data.data);
    } else if (data.meta.code !== 200) {
      yield put(getUserDataFailure());
      // yield call(action?.payload?.errorCallback);
    }
  } catch (error) {
    yield put(getUserDataFailure());
    // yield call(action?.payload?.errorCallback);
  }
}

export function* watchgetUserDataAPI() {
  yield takeEvery(GET_USERDATA, getUserDataRequest);
}

export default function* rootSaga() {
  yield all([watchgetUserDataAPI()]);
}
