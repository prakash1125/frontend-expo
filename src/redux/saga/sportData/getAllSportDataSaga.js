import { all, call, put, takeEvery  } from "redux-saga/effects";
import { GET_ALL_SPORT_DATA } from "../../actions/types";
import { getAllSportDataSuccess, getAllSportDataFailure } from "../../actions";
import API from "../../../utils/api"


function* getAllSportDataRequest(action) {
    console.log("action get all",action)
    try {
        const { data } = yield API.get(`/api/v1/exchange-book?sportId=${action?.payload?.id}`);
       console.log(data,'get All Sport Data');
        if (data.meta.code === 200) {
            yield put(getAllSportDataSuccess(data));
            yield call(action.payload.callback, data.data);
        } else if (data.meta.code !== 200) {
            yield put(getAllSportDataFailure());
        }
    } catch (error) {
        yield put(getAllSportDataFailure());
    }
}


export function* watchgetAllSportDataAPI() {
    yield takeEvery(GET_ALL_SPORT_DATA, getAllSportDataRequest);
}

export default function* rootSaga() {
    yield all([watchgetAllSportDataAPI()]);
}
