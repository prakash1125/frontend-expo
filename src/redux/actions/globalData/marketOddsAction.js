import { GLOBAL_MARKET_ODDS, GLOBAL_MARKET_ODDS_SUCCESS } from "../types";

export const globalMaketOdds = (payload) => ({
  type: GLOBAL_MARKET_ODDS,
  payload,
});

export const globalMaketOddsSuccess = (payload) => ({
  type: GLOBAL_MARKET_ODDS_SUCCESS,
  payload,
});
