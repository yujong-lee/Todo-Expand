/* eslint-disable no-param-reassign */

import * as R from 'ramda';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const stringToDecimal = (target: string): number => parseInt(target, 10);

const keysAsNumberFrom = (
  obj: Record<string, unknown>,
): number[] => R.map<string, number>(
  stringToDecimal,
  Object.keys(obj),
);

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
      const { payload: newTaskTitle } = action;

      if (newTaskTitle === '') {
        return;
      }

      const newTask: Task = { title: newTaskTitle, subTasks: [] };

      const { currentTaskId, nextTaskId } = state;

      state.tasks[nextTaskId] = newTask;

      state.tasks[currentTaskId].subTasks.push(nextTaskId);

      state.nextTaskId = nextTaskId + 1;
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      const { payload: idToDelete } = action;

      state.currentTaskId = 0;

      state.tasks = R.omit([String(idToDelete)], state.tasks);

      const taskIds: number[] = keysAsNumberFrom(state.tasks);

      taskIds.forEach((id) => {
        const { subTasks } = state.tasks[id];

        const newSubTasks = R.reject(R.equals(idToDelete), subTasks);

        state.tasks[id].subTasks = newSubTasks;
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
