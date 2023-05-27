import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";


export const login = () => ({
    type: LOGIN
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});
