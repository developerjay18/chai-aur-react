import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // this line is so confusing

export const store = configureStore({
  reducer: todoReducer,
});
