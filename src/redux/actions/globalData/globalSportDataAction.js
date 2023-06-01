import { GLOBAL_SPORT_DATA, GLOBAL_SPORT_DATA_SUCCESS } from "../types";


export const globalSportData = (payload) => ({
    type: GLOBAL_SPORT_DATA,
    payload,
});

export const globalSportDataSuccess = (payload) => ({
    type: GLOBAL_SPORT_DATA_SUCCESS,
    payload,
});

