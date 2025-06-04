import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";
const Store = configureStore({
  reducer: todoReducer,
});
export default Store;
