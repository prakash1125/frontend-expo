import { combineReducers } from "redux";
//import all reducers creating here, and add inside the combine reducers

import GetSport from "./sports/getSportReducer";
import Login from "./auth/loginReducer";
import GetAllSportData from "./sportData/getAllSportDataReducer";
import GlobalSportData from "./globalData/globalSportDataReducer";
import GobalMarketOdds from "./globalData/marketOddsReducer";
import GetRunnerData from "./runnerData/getRunnerDataReducer";
import PlaceBet from "./bet/placeBetReducer";
import GetBet from "./bet/getBetReducer";
import GetUserData from "./userData/getUserData";
import ChipSetting from "./settings/chipSettingReducer";
import GetChipSetting from "./settings/getChipSettingReducer";
import GetSportSettingReducer from "./settings/getSportSettingReducer";
/* ---------------------------- //example// ---------------------------- */
// import exampleReducer from "./path"

const appReducer = combineReducers({
  //exampleReducer
  Login,
  GetSport,
  GetAllSportData,
  GlobalSportData,
  GobalMarketOdds,
  GetRunnerData,
  PlaceBet,
  GetBet,
  GetUserData,
  ChipSetting,
  GetChipSetting,
  GetSportSettingReducer,
});
const reducers = (state, action) => {
  return appReducer(state, action);
};
export default reducers;
