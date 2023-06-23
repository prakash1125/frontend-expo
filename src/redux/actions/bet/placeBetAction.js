import { PLACE_BET, PLACE_BET_SUCCESS, PLACE_BET_FAILURE } from "../types";

export const placeBet = (payload) => ({
  type: PLACE_BET,
  payload,
});

export const placeBetSuccess = (payload) => ({
  type: PLACE_BET_SUCCESS,
  payload,
});

export const placeBetFailure = () => ({
  type: PLACE_BET_FAILURE,
});
