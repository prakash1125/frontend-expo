import { combineReducers } from "redux";
//import all reducers creating here, and add inside the combine reducers

import GetSport from "./sports/getSportReducer"
import Login from "./auth/loginReducer"
/* ---------------------------- //example// ---------------------------- */
// import exampleReducer from "./path"

const appReducer = combineReducers({
  //exampleReducer
  Login,
  GetSport
});
const reducers = (state, action) => {
  return appReducer(state, action);
};
export default reducers;
