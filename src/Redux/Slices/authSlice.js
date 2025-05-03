import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import AxiosInstance from "../../Utils/axiosInstance";

const initialState = {
  auth: JSON.parse(localStorage.getItem("authToken")) || null,
  state: "ideal",
  error: null,
};

export const isAdmin = () => {
  const auth = JSON.parse(localStorage.getItem("authToken"));
  if (auth) {
    return auth?.role === "admin" ? true : false;
  } else {
    return false;
  }
};
export const isStudent = () => {
  const auth = JSON.parse(localStorage.getItem("authToken"));
  if (auth) {
    return auth?.role === "student" ? true : false;
  } else {
    return false;
  }
};

export const studentLogIn = createAsyncThunk("/student-login", async (data) => {
  try {
    const res = await AxiosInstance.post("/auth/student/login", data);
    toast.success(res?.data?.message);

    return res?.data?.data;
  } catch (error) {
    toast.error(error?.message);
  }
});
export const adminLogIn = createAsyncThunk("/admin-login", async (data) => {
  try {
    const res = await AxiosInstance.post("/auth/admin/login", data);
    toast.success(res?.data?.message);

    return res?.data?.data;
  } catch (error) {
    toast.error(error?.message);
  }
});
export const studentRegister = createAsyncThunk(
  "/student-login",
  async (data) => {
    try {
      const res = await AxiosInstance.post("/auth/student/register", data);
      toast.success(res?.data?.message);

      return res?.data?.data;
    } catch (error) {
      toast.error(error?.message);
    }
  }
);

export const logOut = createAsyncThunk("/student-logout", async () => {
  try {
    const res = await AxiosInstance.get("/auth/student/logout");
    toast.success(res?.data?.message);
    return res?.data?.data;
  } catch (error) {
    toast.error(error?.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(studentLogIn.pending, (state) => {
        state.state = "loading";
      })
      .addCase(studentLogIn.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(studentLogIn.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.state = "fulfilled";
        if (action.payload) {
          localStorage.setItem("authToken", JSON.stringify(action.payload));
        }
      })
      .addCase(adminLogIn.pending, (state) => {
        state.state = "loading";
      })
      .addCase(adminLogIn.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(adminLogIn.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.state = "fulfilled";
        if (action.payload) {
          localStorage.setItem("authToken", JSON.stringify(action.payload));
        }
      })
      .addCase(logOut.pending, (state) => {
        state.state = "loading";
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.state = "error";
      })
      .addCase(logOut.fulfilled, (state, action) => {
        // state.auth = action.payload;
        state.state = "fulfilled";
        state.auth = null;
        localStorage.removeItem("authToken");
      });
  },
});

export default authSlice.reducer;
