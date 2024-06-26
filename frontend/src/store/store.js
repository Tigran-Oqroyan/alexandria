import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectedUniversityReducer from "./Slices/SelectedUniversitySlice";
import selecteDashboardUniversityReducer from "./Slices/SelectedDashboardUniversitySlice";
import selectedDashboardCategoryReducer from "./Slices/SelectedDashboardCategorySlie.";

const reducer = combineReducers({
  currentSelectedUniversity: selectedUniversityReducer,
  currentDashboardUniversity: selecteDashboardUniversityReducer,
  currentDashboardCategory: selectedDashboardCategoryReducer,
});

const store = configureStore({
  reducer,
});

export default store;
