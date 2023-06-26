import {
    GET_CHIP_SETTING,
    GET_CHIP_SETTING_SUCCESS,
    GET_CHIP_SETTING_FAILURE,
    LOGOUT,
} from "../../actions/types";

const INIT_STATE = {
    loading: false,
    chipData: null,
};

const getChipSettingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CHIP_SETTING:
            return { ...state, loading: true };
        case GET_CHIP_SETTING_SUCCESS:
            return { ...state, chipData: action.payload, loading: false };
        case GET_CHIP_SETTING_FAILURE:
            return { ...state, loading: false };
        case LOGOUT:
            return { ...state, chipData: null, loading: false };
        default:
            return state;
    }
};

export default getChipSettingReducer;
