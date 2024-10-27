import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import createSagaMiddleware from "redux-saga";
import {watchFetchExampleTasks} from "./features/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;