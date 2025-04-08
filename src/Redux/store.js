import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Slices/StudentSlice.js";
const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;
