import { createSlice } from "@reduxjs/toolkit";

export const selectedDashboardCategorySlice = createSlice({
  name: "selectedDashboardCategory",
  initialState: "",
  reducers: {
    changeSelectedDashboardCategory: (state, action) => {
      return action.payload || state;
    },
  },
});

export const { changeSelectedDashboardCategory } =
  selectedDashboardCategorySlice.actions;
export default selectedDashboardCategorySlice.reducer;
