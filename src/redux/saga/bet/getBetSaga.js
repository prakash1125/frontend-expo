import { all, call, put, takeEvery } from "redux-saga/effects";
import { GET_BET } from "../../actions/types";
import { getBetSuccess, getBetFailure } from "./../../actions";
import API from "../../../utils/api";

function* getBetRequest(action) {
  try {
    const { data } = yield API.get("api/v1/bet-sport"); // Add the URL from Backend
    console.log(data, "dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    if (data.meta.code === 200) {
      yield put(getBetSuccess(data?.data));
      yield call(action.payload.callback, data.data);
    } else if (data.meta.code !== 200) {
      yield put(getBetFailure());
    }
  } catch (error) {
    yield put(getBetFailure());
  }
}

export function* watchGetBetAPI() {
  yield takeEvery(GET_BET, getBetRequest);
}

export default function* rootSaga() {
  yield all([watchGetBetAPI()]);
}
