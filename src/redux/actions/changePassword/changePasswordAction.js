// actionTypes
import { CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from "../types";


// action creators
export const changePasswordRequest = (newPassword) => ({
    type: CHANGE_PASSWORD_REQUEST,
    payload: newPassword,
});

export const changePasswordSuccess = () => ({
    type: CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFailure = (error) => ({
    type: CHANGE_PASSWORD_FAILURE,
    payload: error,
});
