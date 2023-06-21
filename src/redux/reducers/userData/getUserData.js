import {
  GET_USERDATA,
  GET_USERDATA_FAILURE,
  GET_USERDATA_SUCCESS,
} from "../../actions/types";

const INIT_STATE = {
  loading: false,
  userData: null,
};

const getUserDataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERDATA:
      return { ...state, loading: true };
    case GET_USERDATA_SUCCESS:
      return { ...state, userData: action.payload, loading: false };
    case GET_USERDATA_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getUserDataReducer;
