import { GET_BET, GET_BET_SUCCESS, GET_BET_FAILURE } from "../types";

export const getBet = () => ({
  type: GET_BET,
});

export const getBetSuccess = (payload) => ({
  type: GET_BET_SUCCESS,
  payload,
});

export const getBetFailure = () => ({
  type: GET_BET_FAILURE,
});
