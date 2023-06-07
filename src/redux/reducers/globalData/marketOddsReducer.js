import {
  GLOBAL_MARKET_ODDS,
  GLOBAL_MARKET_ODDS_SUCCESS,
} from "../../actions/types";

const INIT_STATE = {
  globalMarketOdds: null,
};

const globalMarketOddsReducer = (state = INIT_STATE, action) => {
  console.log(action, "actionnnn global Market");
  switch (action.type) {
    case GLOBAL_MARKET_ODDS:
      return { ...state };
    case GLOBAL_MARKET_ODDS_SUCCESS:
      return { ...state, globalMarketOdds: action?.payload };
    default:
      return state;
  }
};

export default globalMarketOddsReducer;
