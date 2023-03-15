import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../features/filter/filterSlice';
import jobReducer from '../features/jobs/jobSlice';

const store = configureStore({
    reducer: {
        jobs: jobReducer,
        filter: filterSlice
    }
});
export default store;