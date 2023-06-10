import {
  PLACE_BET,
  PLACE_BET_SUCCESS,
  PLACE_BET_FAILURE,
} from "../../actions/types";

const INIT_STATE = {
  loading: false,
};

const placeBetReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case PLACE_BET:
      return { ...state, loading: true };
    case PLACE_BET_SUCCESS:
      return { ...state, loading: false };
    case PLACE_BET_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default placeBetReducer;
