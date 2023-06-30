//import all Saga functions you are creating here...
//Add it inside the array like function eg:mySaga()

import { all } from "redux-saga/effects";
import GetSport from "../saga/getSport/getSportSaga";
import Login from "../saga/auth/loginSaga";
import GetAllSportData from "./sportData/getAllSportDataSaga";
import GlobalSportData from "./globalData/globalSportDataSaga";
import GlobalMarketOdds from "./globalData/marketOddsSaga";
import GetRunnerData from "./runnerData/getRunnerDataSaga";
import PlaceBet from "./bet/placeBetSaga";
import GetBet from "./bet/getBetSaga";
import GetUserData from "./userData/getUserDataSaga";
import ChipSetting from "./settings/chipSettingSaga";
import GetChipSetting from "./settings/getChipSettingSaga";
import GetSportSetting from "./settings/getSportSettingSaga";

export default function* rootSaga() {
  yield all([
    Login(),
    GetSport(),
    GetAllSportData(),
    GlobalSportData(),
    GlobalMarketOdds(),
    GetRunnerData(),
    PlaceBet(),
    GetBet(),
    GetUserData(),
    ChipSetting(),
    GetChipSetting(),
    GetSportSetting(),
  ]);
}
