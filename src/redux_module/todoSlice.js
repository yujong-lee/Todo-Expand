/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'todo',

  initialState: {
    tasks: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter(
        ({ id }) => id !== action.payload,
      );
    },
  },
});

export const {
  addTodo,
  deleteTodo,

} = actions;

export default reducer;
