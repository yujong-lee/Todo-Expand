import reducer,
{
  addTask,
  deleteTask,
  restoreTask,
  updateCurrentTaskId,
} from './todoSlice';

import { RestoreData } from './types/types';

describe('todoSlice', () => {
  context('when title is not empty string', () => {
    it('adds new task to todoList and updates nextTaskId', () => {
      const oldState = {
        recentDeleted: [],
        currentTaskId: 1,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: 'task1', subTasks: [] },
        },
      };
      const newState = {
        recentDeleted: [],
        currentTaskId: 1,
        nextTaskId: 3,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: 'task1', subTasks: [2] },
          2: { title: 'task2', subTasks: [] },
        },
      };

      expect(reducer(
        oldState,
        addTask('task2'),
      )).toEqual(newState);
    });
  });

  context('when title is empty string', () => {
    it('does nothing', () => {
      const oldState = {
        recentDeleted: [],
        currentTaskId: 1,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: 'task1', subTasks: [] },
        },
      };

      expect(reducer(
        oldState,
        addTask(''),
      )).toEqual(oldState);
    });
  });

  it('deletes task, reset currentTaskId, and set restore data', () => {
    const restoreData1: RestoreData = {
      task: { title: '첫번째 할일', subTasks: [] },
      selfId: 1,
      parentId: 0,
    };

    const restoreData2: RestoreData = {
      task: { title: '두번째 할일', subTasks: [] },
      selfId: 2,
      parentId: 0,
    };

    const oldState = {
      recentDeleted: [restoreData1],
      currentTaskId: 2,
      nextTaskId: 2,
      tasks: {
        0: { title: 'root', subTasks: [2] },
        2: { title: '두번째 할일', subTasks: [] },
      },
    };
    const newState = {
      recentDeleted: [restoreData1, restoreData2],
      currentTaskId: 0,
      nextTaskId: 2,
      tasks: { 0: { title: 'root', subTasks: [] } },
    };

    expect(reducer(
      oldState,
      deleteTask(2),
    )).toEqual(newState);
  });

  context('when recentDeleted is not empty', () => {
    it('retores recent deleted task', () => {
      const restoreData1: RestoreData = {
        task: { title: '첫번째 할일', subTasks: [] },
        selfId: 1,
        parentId: 0,
      };

      const oldState = {
        recentDeleted: [restoreData1],
        currentTaskId: 0,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [2] },
          2: { title: '두번째 할일', subTasks: [] },
        },
      };

      const newState = {
        recentDeleted: [],
        currentTaskId: 0,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [2, 1] },
          1: { title: '첫번째 할일', subTasks: [] },
          2: { title: '두번째 할일', subTasks: [] },
        },
      };

      expect(reducer(
        oldState,
        restoreTask(),
      )).toEqual(newState);
    });

    it('updates current task id', () => {
      const oldState = {
        recentDeleted: [],
        currentTaskId: 0,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: '첫번째 할일', subTasks: [] },
        },
      };
      const newState = {
        recentDeleted: [],
        currentTaskId: 1,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: '첫번째 할일', subTasks: [] },
        },
      };

      expect(reducer(
        oldState,
        updateCurrentTaskId(1),
      )).toEqual(newState);
    });
  });

  context('when recentDeleted is empty', () => {
    it('does nothing', () => {
      const oldState = {
        recentDeleted: [],
        currentTaskId: 0,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: '첫번째 할일', subTasks: [] },
        },
      };
      expect(reducer(
        oldState,
        restoreTask(),
      )).toEqual(oldState);
    });
  });
});
