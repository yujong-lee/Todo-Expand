import reducer,
{
  addTask,
  deleteTask,
  updateCurrentTaskId,
} from './todoSlice';

describe('todoSlice', () => {
  it('adds new task to todoList and updates nextTaskId', () => {
    const oldState = {
      nextTaskId: '3',
      tasks: { },
    };
    const newState = {
      nextTaskId: '4',
      tasks: { 3: { title: '책 읽기', children: {} } },
    };

    expect(reducer(
      oldState,
      addTask({ title: '책 읽기', children: {} }),
    )).toEqual(newState);
  });

  it('deletes task from todoList', () => {
    const oldState = {
      nextTaskId: '3',
      tasks: { 2: { title: '책 읽기', children: {} } },
    };
    const newState = {
      nextTaskId: '3',
      tasks: {},
    };

    expect(reducer(
      oldState,
      deleteTask(2),
    )).toEqual(newState);
  });

  it('deletes task from todoList', () => {
    const oldState = {
      currentTaskId: '1',
    };
    const newState = {
      currentTaskId: '3',
    };

    expect(reducer(
      oldState,
      updateCurrentTaskId('3'),
    )).toEqual(newState);
  });
});
