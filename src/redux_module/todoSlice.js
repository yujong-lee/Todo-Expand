/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

function deleteTaskHelper(tasks, id) {
  const { [id]: deleted, ...rest } = { ...tasks };
  return rest;
}

function deleteTaskHelperRecursive(state, idToDelete) {
  if (Object.keys(state.tasks).includes(idToDelete)) {
    return { ...state, tasks: deleteTaskHelper(state.tasks, idToDelete) };
  }

  const result = Object.entries(state.tasks).reduce((acc, [id, task]) => {
    if (!Object.keys(task.children).includes(idToDelete)) {
      return { ...acc, [id]: task };
    }
    return {
      ...acc,
      [id]: {
        title: task.title,
        children: deleteTaskHelper(task.children, idToDelete),
      },
    };
  }, {});

  return { ...state, tasks: result };
}

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

    deleteTask: (state, action) => deleteTaskHelperRecursive(state, action.payload),

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
