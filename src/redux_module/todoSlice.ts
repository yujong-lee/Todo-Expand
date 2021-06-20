/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Task = {
  title: string
  subTasks: number[]
};

type Tasks = {
  [id: number]: Task
};

type TodoState = {
  currentTaskId: number
  nextTaskId: number
  tasks: Tasks
};

const initialState: TodoState = {
  currentTaskId: 0,
  nextTaskId: 1,
  tasks: {
    0: { title: 'root', subTasks: [] },
  },
};

const { actions, reducer } = createSlice({
  name: 'todo',

  initialState,

  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        return;
      }

      const { currentTaskId, nextTaskId } = state;

      const newTask: Task = { title: action.payload, subTasks: [] };

      state.tasks[nextTaskId] = newTask;

      state.tasks[currentTaskId].subTasks.push(nextTaskId);

      state.nextTaskId = nextTaskId + 1;
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      const { payload: idToDelete } = action;

      state.currentTaskId = 0;

      delete state.tasks[idToDelete];

      const ids: number[] = Object.keys(state.tasks).map((id) => parseInt(id, 10));

      ids.forEach((id) => {
        const arr = state.tasks[id].subTasks;
        state.tasks[id].subTasks = arr.filter(
          (subTaskId) => subTaskId !== idToDelete,
        );
      });
    },

    updateCurrentTaskId: (state, action: PayloadAction<number>) => {
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
