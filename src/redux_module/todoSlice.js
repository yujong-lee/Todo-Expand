/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

function removeTargetFromTask(tasks, id) {
  const { [id]: deleted, ...rest } = { ...tasks };
  return rest;
}

function deleteTaskRecursive(tasks, idToDelete) {
  if (!tasks) {
    return {};
  }

  if (Object.keys(tasks).includes(idToDelete)) {
    return removeTargetFromTask(tasks, idToDelete);
  }

  const result = Object.entries(tasks).reduce((acc, [id, task]) => {
    if (Object.keys(task.children).includes(idToDelete)) {
      return {
        ...acc,
        [id]: {
          title: task.title,
          children: removeTargetFromTask(task.children, idToDelete),
        },
      };
    }
    return { ...acc, [id]: task };
  }, {});

  return result;
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

    deleteTask: (state, action) => ({
      ...state,
      tasks: deleteTaskRecursive(state.tasks, action.payload),
    }),

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
