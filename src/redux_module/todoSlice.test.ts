import reducer,
{ addTask, deleteTask } from './todoSlice';

describe('todoSlice', () => {
  context('when title is not empty string', () => {
    it('adds new task to todoList and updates nextTaskId', () => {
      const oldState = {
        currentTaskId: 1,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: 'task1', subTasks: [] },
        },
      };
      const newState = {
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
        addTask({ title: 'task2' }),
      )).toEqual(newState);
    });
  });

  context('when title is empty string', () => {
    it('does nothing', () => {
      const oldState = {
        currentTaskId: 1,
        nextTaskId: 2,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: 'task1', subTasks: [] },
        },
      };

      expect(reducer(
        oldState,
        addTask({ title: '' }),
      )).toEqual(oldState);
    });
  });

  it('deletes task from tasks and reset currentTaskId', () => {
    const oldState = {
      currentTaskId: 1,
      nextTaskId: 2,
      tasks: {
        0: { title: 'root', subTasks: [1] },
        1: { title: '첫번째 할일', subTasks: [] },
      },
    };
    const newState = {
      currentTaskId: 0,
      nextTaskId: 2,
      tasks: { 0: { title: 'root', subTasks: [] } },
    };

    expect(reducer(
      oldState,
      deleteTask(1),
    )).toEqual(newState);
  });
});
