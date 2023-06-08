import { all, call, put, takeEvery  } from "redux-saga/effects";
import { GET_SPORT } from "../../actions/types";
import { getSportSuccess, getSportFailure } from "./../../actions";
import API from "../../../utils/api"


function* getSportRequest(action) {
    try {
        const { data } = yield API.get("admin/get-sports-data");
        if (data.meta.code === 200) {
            yield put(getSportSuccess(data));
            yield call(action.payload.callback, data.data);
        } else if (data.meta.code !== 200) {
            yield put(getSportFailure());
        }
    } catch (error) {
        yield put(getSportFailure());
    }
}


export function* watchGetSportAPI() {
    yield takeEvery(GET_SPORT, getSportRequest);
}

export default function* rootSaga() {
    yield all([watchGetSportAPI()]);
}
