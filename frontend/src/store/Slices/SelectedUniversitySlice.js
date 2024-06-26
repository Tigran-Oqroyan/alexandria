import { createSlice } from "@reduxjs/toolkit";

export const selectedUniversitySlice = createSlice({
  name: "selectedUniversity",
  initialState: "Yerevan State University",
  reducers: {
    changeSelectedUniversity: (state, action) => {
      return action.payload || state;
    },
  },
});

export const { changeSelectedUniversity } = selectedUniversitySlice.actions;
export default selectedUniversitySlice.reducer;
