import {combineReducers, configureStore} from '@reduxjs/toolkit';
import selectedUniversityReducer from './Slices/SelectedUniversitySlice';

const reducer = combineReducers({
    currentSelectedUniversity: selectedUniversityReducer 
});

const store = configureStore({
    reducer
});

export default store;