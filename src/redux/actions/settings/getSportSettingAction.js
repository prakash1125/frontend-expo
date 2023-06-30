import {
  GET_SPORT_SETTING,
  GET_SPORT_SETTING_SUCCESS,
  GET_SPORT_SETTING_FAILURE,
} from "../types";

export const getSportSetting = (payload) => ({
  type: GET_SPORT_SETTING,
  payload,
});

export const getSportSettingSuccess = (payload) => ({
  type: GET_SPORT_SETTING_SUCCESS,
  payload,
});

export const getSportSettingFailure = () => ({
  type: GET_SPORT_SETTING_FAILURE,
});
