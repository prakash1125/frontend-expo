import {
  GET_RUNNER_DATA,
  GET_RUNNER_DATA_SUCCESS,
  GET_RUNNER_DATA_FAILURE,
} from "../../actions/types";

const INIT_STATE = {
  loading: false,
  runnerData: null,
};

const getrunnerDataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_RUNNER_DATA:
      return { ...state, loading: true };
    case GET_RUNNER_DATA_SUCCESS:
      return { ...state, runnerData: action.payload, loading: false };
    case GET_RUNNER_DATA_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getrunnerDataReducer;
