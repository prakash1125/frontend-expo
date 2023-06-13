import {
  GLOBAL_SPORT_DATA,
  GLOBAL_SPORT_DATA_SUCCESS,
} from "../../actions/types";

const INIT_STATE = {
  globalSportData: null,
};

const globalSportDataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GLOBAL_SPORT_DATA:
      return { ...state };
    case GLOBAL_SPORT_DATA_SUCCESS:
      return { ...state, globalSportData: action?.payload };
    default:
      return state;
  }
};

export default globalSportDataReducer;
