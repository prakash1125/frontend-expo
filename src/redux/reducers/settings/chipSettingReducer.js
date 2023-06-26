import {
    CHIP_SETTING,
    CHIP_SETTING_SUCCESS,
    CHIP_SETTING_FAILURE,
  } from "../../actions/types";
  
  const INIT_STATE = {
    loading: false,
    newChip: null
  };
  
  const chipSettingReducer = (state = INIT_STATE, action) => {
    console.log("action....",action)
    switch (action.type) {
      case CHIP_SETTING:
        return { ...state, loading: true };
      case CHIP_SETTING_SUCCESS:
        return { ...state, loading: false ,newChip :action?.payload};
      case CHIP_SETTING_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default chipSettingReducer;
  