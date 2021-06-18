/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'todo',

  initialState: {
    currentTaskId: '0',
    nextTaskId: '1',
    tasks: {
      0: { title: 'root', subTasks: [] },
    },
  },

  reducers: {
    addTask: (state, action) => {
      if (action.payload.title === '') {
        return;
      }

      const { currentTaskId, nextTaskId } = state;

      state.tasks[nextTaskId] = { ...action.payload, subTasks: [] };

      state.tasks[currentTaskId].subTasks.push(nextTaskId);

      state.nextTaskId = (Number.parseInt(nextTaskId, 10) + 1).toString(10);
    },

    deleteTask: (state, action) => {
      const { payload: idToDelete } = action;

      delete state.tasks[idToDelete];

      Object.keys(state.tasks).forEach(
        (id) => {
          const arr = state.tasks[id].subTasks;
          state.tasks[id].subTasks = arr.filter(
            (subTaskId) => subTaskId !== idToDelete,
          );
        },
      );
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
