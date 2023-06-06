import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";


export const login = (phoneNumberValue, passwordValue) => ({
    type: LOGIN, 
    payload: { phoneNumberValue, passwordValue },
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});
