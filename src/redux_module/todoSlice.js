/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'todo',

  initialState: {
    nextTaskId: 1,
    tasks: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.tasks[state.nextTaskId] = action.payload;
      state.nextTaskId += 1;
    },

    deleteTodo: (state, action) => {
      const { [action.payload]: toDelete, ...rest } = { ...state.tasks };
      state.tasks = rest;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
} = actions;

export default reducer;
