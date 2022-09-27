import { fork } from "redux-saga/effects";
import vpsSaga from "./vpsSaga/vpsSaga";

export default function* rootSaga() {
  yield fork(vpsSaga);
}
