import { combineReducers } from "redux";
//import all reducers creating here, and add inside the combine reducers

import GetSport from "./sports/getSportReducer";
import Login from "./auth/loginReducer";
import GetAllSportData from "./sportData/getAllSportDataReducer";
import GlobalSportData from "./globalData/globalSportDataReducer";
import GobalMarketOdds from "./globalData/marketOddsReducer";
import GetRunnerData from "./runnerData/getRunnerDataReducer";

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
});
const reducers = (state, action) => {
  return appReducer(state, action);
};
export default reducers;
