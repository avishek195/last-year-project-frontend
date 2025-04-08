import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  state: "ideal",
  error: null,
};

export const getAllStudent = createAsyncThunk("/get-students", async () => {
  try {
  } catch (error) {}
});

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudent.pending, (state) => {
        state.state = "loading";
      })
      .addCase(getAllStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.students = action.payload;
        state.state = "fulfilled";
      });
  },
});

export default studentSlice.reducer;
