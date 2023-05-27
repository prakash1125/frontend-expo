import { GET_SPORT, GET_SPORT_SUCCESS, GET_SPORT_FAILURE } from "../types";


export const getSport = () => ({
    type: GET_SPORT
});

export const getSportSuccess = (payload) => ({
    type: GET_SPORT_SUCCESS,
    payload,
});

export const getSportFailure = () => ({
    type: GET_SPORT_FAILURE,
});
