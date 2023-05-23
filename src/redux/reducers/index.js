import { combineReducers } from "redux";
//import all reducers creating here, and add inside the combine reducers

/* ---------------------------- //example// ---------------------------- */
// import exampleReducer from "./path"

const appReducer = combineReducers({
  //exampleReducer
});
const reducers = (state, action) => {
  return appReducer(state, action);
};
export default reducers;
