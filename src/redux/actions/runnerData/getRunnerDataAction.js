import {
  GET_RUNNER_DATA,
  GET_RUNNER_DATA_SUCCESS,
  GET_RUNNER_DATA_FAILURE,
} from "../types";

export const getRunnerData = (payload) => ({
  type: GET_RUNNER_DATA,
  payload,
});

export const getRunnerDataSuccess = (payload) => ({
  type: GET_RUNNER_DATA_SUCCESS,
  payload,
});

export const getRunnerDataFailure = () => ({
  type: GET_RUNNER_DATA_FAILURE,
});
