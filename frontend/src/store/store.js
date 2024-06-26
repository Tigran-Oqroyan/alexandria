import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectedUniversityReducer from "./Slices/SelectedUniversitySlice";
import selecteDashboardUniversitySlice from "./Slices/SelectedDashboardUniversitySlice";
import selectedDashboardCategorySlice from "./Slices/SelectedDashboardCategorySlie.";

const reducer = combineReducers({
  currentSelectedUniversity: selectedUniversityReducer,
  currentDashboardUniversity: selecteDashboardUniversitySlice,
  currentDashboardCategory: selectedDashboardCategorySlice,
});

const store = configureStore({
  reducer,
});

export default store;
