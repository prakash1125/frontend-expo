//import all Saga functions you are creating here...
//Add it inside the array like function eg:mySaga()

import { all } from "redux-saga/effects";
import GetSport from "../saga/getSport/getSportSaga"
import Login from "../saga/auth/loginSaga"

export default function* rootSaga() {
  yield all([
    Login(),
    GetSport()
  ]);
}
