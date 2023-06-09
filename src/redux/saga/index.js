//import all Saga functions you are creating here...
//Add it inside the array like function eg:mySaga()

import { all } from "redux-saga/effects";
import GetSport from "../saga/getSport/getSportSaga";
import Login from "../saga/auth/loginSaga";
import GetAllSportData from "./sportData/getAllSportDataSaga";
import GlobalSportData from "./globalData/globalSportDataSaga";
import GlobalMarketOdds from "./globalData/marketOddsSaga";
import GetRunnerData from "./runnerData/getRunnerDataSaga";
import changePasswordSaga from "./changePassword/changePasswordSaga";

export default function* rootSaga() {
  yield all([
    Login(),
    GetSport(),
    GetAllSportData(),
    GlobalSportData(),
    GlobalMarketOdds(),
    GetRunnerData(),
    changePasswordSaga(),
  ]);
}
