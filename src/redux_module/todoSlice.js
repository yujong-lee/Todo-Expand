/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

function deleteTaskHelper(tasks, id) {
  const { [id]: deleted, ...rest } = { ...tasks };
  return rest;
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

    deleteTask: (state, action) => {
      // Todo: 재귀(깊이무한), deleteTaskHelper이름 변경
      if (Object.keys(state.tasks).includes(action.payload)) {
        state.tasks = deleteTaskHelper(state.tasks, action.payload);
      } else {
        Object.entries(state.tasks).forEach(([id, task]) => {
          if (Object.keys(task.children).includes(action.payload)) {
            state.tasks[id].children = deleteTaskHelper(task.children, action.payload);
          }
        });
      }
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
