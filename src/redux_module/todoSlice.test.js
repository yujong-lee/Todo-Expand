import reducer,
{ addTask, deleteTask } from './todoSlice';

describe('todoSlice', () => {
  it('adds new task to todoList and updates nextTaskId', () => {
    const oldState = {
      currentTaskId: '0',
      nextTaskId: '1',
      tasks: {
        0: { title: 'root', subTasks: [] },
      },
    };
    const newState = {
      currentTaskId: '0',
      nextTaskId: '2',
      tasks: {
        0: { title: 'root', subTasks: ['1'] },
        1: { title: '첫번째 할일', subTasks: [] },
      },
    };

    expect(reducer(
      oldState,
      addTask({ title: '첫번째 할일' }),
    )).toEqual(newState);
  });

  it('deletes task from tasks', () => {
    const oldState = {
      tasks: {
        0: { title: 'root', subTasks: ['1'] },
        1: { title: '첫번째 할일', subTasks: [] },
      },
    };
    const newState = {
      tasks: { 0: { title: 'root', subTasks: [] } },
    };

    expect(reducer(
      oldState,
      deleteTask('1'),
    )).toEqual(newState);
  });
});
