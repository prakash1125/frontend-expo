import { CHIP_SETTING, CHIP_SETTING_SUCCESS, CHIP_SETTING_FAILURE } from "../types";

export const chipSetting = (payload) => ({
  type: CHIP_SETTING,
  payload,
});

export const chipSettingSuccess = (payload) => ({
  type: CHIP_SETTING_SUCCESS,
  payload,
});

export const chipSettingFailure = () => ({
  type: CHIP_SETTING_FAILURE,
});
