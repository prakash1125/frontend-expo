import {
    GET_CHIP_SETTING,
    GET_CHIP_SETTING_SUCCESS,
    GET_CHIP_SETTING_FAILURE,
  } from "../types";
  
  export const getChipSetting = (payload) => ({
    type: GET_CHIP_SETTING,
    payload,
  });
  
  export const getChipSettingSuccess = (payload) => ({
    type: GET_CHIP_SETTING_SUCCESS,
    payload,
  });
  
  export const getChipSettingFailure = () => ({
    type: GET_CHIP_SETTING_FAILURE,
  });
  