import {all} from 'redux-saga/effects'
import {sagaWatcher} from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        sagaWatcher(),
    ])
}