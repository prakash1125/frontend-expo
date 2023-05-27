import {
    GET_SPORT, GET_SPORT_SUCCESS, GET_SPORT_FAILURE
} from "../../actions/types";

const INIT_STATE = {
    loading: false,
    getSport: null,
};


const getSportReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_SPORT:
            return { ...state, loading: true };
        case GET_SPORT_SUCCESS:
            return { ...state, getSport: action.payload, loading: false };
        case GET_SPORT_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default getSportReducer;