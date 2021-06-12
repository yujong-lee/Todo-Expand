/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'todo',

  initialState: {
    currentTaskId: '0',
    nextTaskId: '1',
    tasks: {},
  },

  reducers: {
    addTask: (state, action) => {
      if (state.currentTaskId === '0') {
        state.tasks[state.nextTaskId] = action.payload;
      } else {
        state.tasks[state.currentTaskId].children[state.nextTaskId] = action.payload;
      }

      state.nextTaskId = (Number.parseInt(state.nextTaskId, 10) + 1).toString(10);
    },

    deleteTask: (state, action) => {
      const { [action.payload]: deleted, ...rest } = { ...state.tasks };
      state.tasks = rest;
    },

    updateCurrentTaskId: (state, action) => {
      state.currentTaskId = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateCurrentTaskId,
} = actions;

export default reducer;
