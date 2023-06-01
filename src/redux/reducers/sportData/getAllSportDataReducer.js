import {
    GET_ALL_SPORT_DATA, GET_ALL_SPORT_DATA_SUCCESS, GET_ALL_SPORT_DATA_FAILURE
} from "../../actions/types";

const INIT_STATE = {
    loading: false,
    getAllSportData: null,
};


const getAllSportDataReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_SPORT_DATA:
            return { ...state, loading: true };
        case GET_ALL_SPORT_DATA_SUCCESS:
            return { ...state, getAllSportData: action.payload, loading: false };
        case GET_ALL_SPORT_DATA_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default getAllSportDataReducer;