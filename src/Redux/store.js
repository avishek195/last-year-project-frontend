import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Slices/StudentSlice.js";
import authReducer from "./Slices/authSlice.js";
import complaineReducer from "./Slices/complaineSlice.js";
const store = configureStore({
  reducer: {
    student: studentReducer,
    auth: authReducer,
    complaine: complaineReducer,
  },
});

export default store;
