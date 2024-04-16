import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './userReducer';

const store = configureStore({
    reducer: rootReducer
});

export { store };