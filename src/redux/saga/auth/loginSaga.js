import { all, call, put, takeEvery  } from "redux-saga/effects";
import { LOGIN } from "../../actions/types";
import { loginSuccess, loginFailure } from "../../actions";
import API from "../../../utils/api"


function* loginRequest(action) {
    console.log("action",action)
    try {
        const { data } = yield API.post("api/v1/login", action?.payload?.inputValues);
        if (data.meta.code === 200) {
            yield put(loginSuccess(data));
            yield call(action.payload.callback, data.data);
        } else if (data.meta.code !== 200) {
            yield put(loginFailure());
        }
    } catch (error) {
        yield put(loginFailure());
    }
}


export function* watchloginAPI() {
    yield takeEvery(LOGIN, loginRequest);
}

export default function* rootSaga() {
    yield all([watchloginAPI()]);
}
