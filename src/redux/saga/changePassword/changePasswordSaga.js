import { takeLatest, call, put, all } from 'redux-saga/effects';
import { CHANGE_PASSWORD_REQUEST } from '../../actions/types';
import {
    changePasswordSuccess,
    changePasswordFailure
} from "../../actions/index";

// Simulated API call function
const changePasswordApi = (newPassword) => {
    // Replace with your actual API call
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous API call
        setTimeout(() => {
            // Simulating a successful response
            if (newPassword === 'newpassword') {
                resolve();
            } else {
                // Simulating an error response
                reject(new Error('Invalid password'));
            }
        }, 2000);
    });
};

function* changePasswordWorker(action) {
    try {
        // Call the change password API using the provided action payload
        yield call(changePasswordApi, action.payload);

        // Dispatch a success action
        yield put(changePasswordSuccess());
    } catch (error) {
        // Dispatch a failure action with the error message
        yield put(changePasswordFailure(error.message));
    }
}

export default function* passwordSaga() {
    yield takeLatest(CHANGE_PASSWORD_REQUEST, changePasswordWorker);
}
