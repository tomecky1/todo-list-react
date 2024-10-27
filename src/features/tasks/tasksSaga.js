import {call, delay, put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchExampleTasks, selectTasks, setTasks} from "./tasksSlice";
import {getExampleTasks} from "./getExampleTasks";
import {saveTasksInLocalStorage} from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    console.log("Pobieram zadania")
    try {
        yield delay(1500);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak")
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    console.log("Saga jest podłączona")
    yield takeLatest(fetchExampleTasks, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}