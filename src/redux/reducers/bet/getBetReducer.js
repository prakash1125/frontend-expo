import {
  GET_BET,
  GET_BET_SUCCESS,
  GET_BET_FAILURE,
  LOGOUT,
} from "../../actions/types";

const INIT_STATE = {
  loading: false,
  allBets: null,
};

const getBetReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BET:
      return { ...state, loading: true };
    case GET_BET_SUCCESS:
      return { ...state, allBets: action?.payload, loading: false };
    case GET_BET_FAILURE:
      return { ...state, loading: false };
    case LOGOUT:
      return { ...state, allBets: null, loading: false };
    default:
      return state;
  }
};

export default getBetReducer;
