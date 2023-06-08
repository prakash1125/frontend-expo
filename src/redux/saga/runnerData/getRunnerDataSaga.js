import { all, call, put, takeEvery } from "redux-saga/effects";
import { GET_RUNNER_DATA } from "../../actions/types";
import { getRunnerDataSuccess, getRunnerDataFailure } from "../../actions";
import API from "../../../utils/api";

function* getRunnerDataRequest(action) {
  console.log("action get all", action);
  try {
    const { data } = yield API.get(
      `admin/get-runners-data?marketId=${action?.payload?.id}`
    );
    console.log(data, "get All Sport Data");
    if (data.meta.code === 200) {
      yield put(getRunnerDataSuccess(data));
      yield call(action.payload.callback, data.data);
    } else if (data.meta.code !== 200) {
      yield put(getRunnerDataFailure());
    }
  } catch (error) {
    yield put(getRunnerDataFailure());
  }
}

export function* watchtGetRunnerDataAPI() {
  yield takeEvery(GET_RUNNER_DATA, getRunnerDataRequest);
}

export default function* rootSaga() {
  yield all([watchtGetRunnerDataAPI()]);
}
