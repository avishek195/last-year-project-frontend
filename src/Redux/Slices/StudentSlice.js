import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import AxiosInstance from "../../Utils/axiosInstance";

const initialState = {
  students: [],
  state: "ideal",
  error: null,
};

export const getAllStudent = createAsyncThunk("/get-students", async () => {
  try {
    const res = await AxiosInstance.get("/students/all?page=1&limit=10");
    // toast.success(res?.data?.message);
    // console.log("res", res?.data?.data);

    return res?.data?.data?.students;
  } catch (error) {
    toast.error(error?.message);
  }
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
        if (action.payload) {
          state.students = action.payload;
        }

        state.state = "fulfilled";
      });
  },
});

export default studentSlice.reducer;
