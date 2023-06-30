import {
  GET_SPORT_SETTING,
  GET_SPORT_SETTING_SUCCESS,
  GET_SPORT_SETTING_FAILURE,
} from "../../actions/types";

const INIT_STATE = {
  loading: false,
  sportSettingData: null,
};

const getSportSettingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SPORT_SETTING:
      return { ...state, loading: true };
    case GET_SPORT_SETTING_SUCCESS:
      return { ...state, sportSettingData: action.payload, loading: false };
    case GET_SPORT_SETTING_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getSportSettingReducer;
