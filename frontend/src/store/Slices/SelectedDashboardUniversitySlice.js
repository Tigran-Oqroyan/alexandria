import { createSlice } from "@reduxjs/toolkit";

export const selecteDashboardUniversitySlice = createSlice({
  name: "selectedDashboardUnivercity",
  initialState: "",
  reducers: {
    changeSelectedDashboardUniversity: (state, action) => {
      return action.payload || state;
    },
  },
});

export const { changeSelectedDashboardUniversity } =
  selecteDashboardUniversitySlice.actions;
export default selecteDashboardUniversitySlice.reducer;
