import { combineReducers } from "redux";
//import all reducers creating here, and add inside the combine reducers

import GetSport from "./sports/getSportReducer";
import Login from "./auth/loginReducer";
import GetAllSportData from "./sportData/getAllSportDataReducer";
import GlobalSportData from "./globalData/globalSportDataReducer";
import GobalMarketOdds from "./globalData/marketOddsReducer";

/* ---------------------------- //example// ---------------------------- */
// import exampleReducer from "./path"

const appReducer = combineReducers({
  //exampleReducer
  Login,
  GetSport,
  GetAllSportData,
  GlobalSportData,
  GobalMarketOdds,
});
const reducers = (state, action) => {
  return appReducer(state, action);
};
export default reducers;
