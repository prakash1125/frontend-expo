import {
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE,
} from '../../actions/types/index';

const INIT_STATE = {
    loading: false,
    error: null,
};

const changePasswordReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default changePasswordReducer;
