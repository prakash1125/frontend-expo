import {
  GET_USERDATA,
  GET_USERDATA_SUCCESS,
  GET_USERDATA_FAILURE,
} from "../types";

export const getUserData = () => ({
  type: GET_USERDATA,
});

export const getUserDataSuccess = (payload) => ({
  type: GET_USERDATA_SUCCESS,
  payload,
});

export const getUserDataFailure = () => ({
  type: GET_USERDATA_FAILURE,
});
