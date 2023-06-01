import { all, call, put, takeEvery } from "redux-saga/effects";
import { GLOBAL_SPORT_DATA } from "../../actions/types";
import { globalSportData , globalSportDataSuccess} from "../../actions/globalData/globalSportDataAction"
import API from "../../../utils/api"


function* addGlobalSportData(action) {
    console.log("actionzzzzzzzzzz", action)
    try {
        yield put(globalSportDataSuccess(action.payload.data));
    } catch (error) {
        console.log(error);
    }
}


export function* watchaddGlobalSportData() {
    yield takeEvery(GLOBAL_SPORT_DATA, addGlobalSportData);
}

export default function* rootSaga() {
    yield all([watchaddGlobalSportData()]);
}
