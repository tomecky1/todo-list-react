import {call, delay, put, takeLatest} from 'redux-saga/effects';
import {fetchExampleTasks, setTasks} from "./tasksSlice";
import {getExampleTasks} from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    console.log("Pobieram zadania")
    try {
        yield delay(1800);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak")
    }
}

export function* watchFetchExampleTasks() {
    console.log("Saga jest podłączona")
    yield takeLatest(fetchExampleTasks, fetchExampleTasksHandler);
}