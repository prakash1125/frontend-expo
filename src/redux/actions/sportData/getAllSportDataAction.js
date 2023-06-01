import { GET_ALL_SPORT_DATA, GET_ALL_SPORT_DATA_SUCCESS, GET_ALL_SPORT_DATA_FAILURE } from "../types";


export const getAllSportData = (payload) => ({
    type: GET_ALL_SPORT_DATA,
    payload,
});

export const getAllSportDataSuccess = (payload) => ({
    type: GET_ALL_SPORT_DATA_SUCCESS,
    payload,
});

export const getAllSportDataFailure = () => ({
    type: GET_ALL_SPORT_DATA_FAILURE,
});


