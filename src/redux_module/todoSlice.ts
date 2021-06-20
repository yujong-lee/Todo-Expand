/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type TodoState = {
  currentTaskId: string
  nextTaskId: string
  tasks: {
    [id: string]: {title: string, subTasks: string[]}
  }
}

type TaskWithTitle = {
  title: string
}

const initialState: TodoState = {
  currentTaskId: '0',
  nextTaskId: '1',
  tasks: {
    0: { title: 'root', subTasks: [] },
  },
}


const { actions, reducer } = createSlice({
  name: 'todo',

  initialState,

  reducers: {
    addTask: (state, action: PayloadAction<TaskWithTitle>) => {
      if (action.payload.title === '') {
        return;
      }

      const { currentTaskId, nextTaskId } = state;

      state.tasks[nextTaskId] = { ...action.payload, subTasks: [] };

      state.tasks[currentTaskId].subTasks.push(nextTaskId);

      state.nextTaskId = (Number.parseInt(nextTaskId, 10) + 1).toString(10);
    },

    deleteTask: (state, action:  PayloadAction<string>) => {
      const { payload: idToDelete } = action;

      state.currentTaskId = '0';

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

    updateCurrentTaskId: (state, action: PayloadAction<string>) => {
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
