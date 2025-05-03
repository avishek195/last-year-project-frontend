import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../Utils/axiosInstance";
import { toast } from "react-toastify";

const initialState = {
  complaines: [],
  state: "ideal",
  error: null,
};

export const getAllComplaine = createAsyncThunk("/get-complaines", async () => {
  try {
    const res = await AxiosInstance.get("/auth/student/complaine/all");
    console.log(res?.data?.data);

    return res?.data?.data;
  } catch (error) {
    toast.error(error?.message);
  }
});
export const createComplaine = createAsyncThunk(
  "/create-complaines",
  async (data) => {
    try {
      const res = await AxiosInstance.post(
        `/auth/student/complaine/create`,
        data
      );
      console.log(res?.data?.data);
      toast.success(res?.data?.message);
      return res?.data?.data;
    } catch (error) {
      toast.error(error?.message);
    }
  }
);
export const updateComplaine = createAsyncThunk(
  "/update-complaines",
  async (data) => {
    try {
      const res = await AxiosInstance.put(
        `/auth/student/complaine/update/${data.id}`,
        data
      );
      console.log(res?.data?.data);
      toast.success(res?.data?.message);
      return res?.data?.data;
    } catch (error) {
      toast.error(error?.message);
    }
  }
);
export const deleteComplaine = createAsyncThunk(
  "/delete-complaines",
  async (data) => {
    try {
      const res = await AxiosInstance.delete(
        `/auth/student/complaine/delete/${data.id}`,
        data
      );
      console.log(res?.data?.data);
      toast.success(res?.data?.message);
      return res?.data?.data;
    } catch (error) {
      toast.error(error?.message);
    }
  }
);

export const complaineSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllComplaine.pending, (state) => {
        state.state = "loading";
      })
      .addCase(getAllComplaine.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(getAllComplaine.fulfilled, (state, action) => {
        if (action.payload) {
          state.complaines = action.payload;
        }
        state.state = "fulfilled";
      })
      .addCase(createComplaine.pending, (state) => {
        state.state = "loading";
      })
      .addCase(createComplaine.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(createComplaine.fulfilled, (state, action) => {
        // if (action.payload) {
        //   state.complaines = action.payload;
        // }
        state.state = "fulfilled";
      })
      .addCase(updateComplaine.pending, (state) => {
        state.state = "loading";
      })
      .addCase(updateComplaine.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(updateComplaine.fulfilled, (state, action) => {
        // if (action.payload) {
        //   state.complaines = action.payload;
        // }
        state.state = "fulfilled";
      })
      .addCase(deleteComplaine.pending, (state) => {
        state.state = "loading";
      })
      .addCase(deleteComplaine.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(deleteComplaine.fulfilled, (state, action) => {
        // if (action.payload) {
        //   state.complaines = action.payload;
        // }
        state.state = "fulfilled";
      });
  },
});

export default complaineSlice.reducer;
