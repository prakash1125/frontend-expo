import { all, put, takeEvery } from "redux-saga/effects";
import { GLOBAL_MARKET_ODDS } from "../../actions/types";
import { globalMaketOddsSuccess } from "../../actions/globalData/marketOddsAction";
import API from "../../../utils/api";

function* addGlobalMarketOdds(action) {
  try {
    yield put(globalMaketOddsSuccess(action.payload.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchaddGlobalMarketOdds() {
  yield takeEvery(GLOBAL_MARKET_ODDS, addGlobalMarketOdds);
}

export default function* rootSaga() {
  yield all([watchaddGlobalMarketOdds()]);
}
