import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  updateTodoId: 0,
  todos: [{ id: 1, text: 'lets be productive!!', updateMode: false }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // add todo reducer
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    // remove todo reducer
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // update todo reducer
    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload[0]) {
          todo.text = action.payload[1];
        }
      });
    },

    // update mode switcher reducer
    toggleUpdateMode: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.updateMode = !todo.updateMode;
        }
      });

      state.updateTodoId = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleUpdateMode } =
  todoSlice.actions;

export default todoSlice.reducer;
