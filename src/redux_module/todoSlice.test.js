import reducer,
{
  addTodo,
  deleteTodo,
} from './todoSlice';

describe('todoSlice', () => {
  it('adds new task to todoList and updates nextTaskId', () => {
    const oldState = {
      nextTaskId: 3,
      tasks: { },
    };
    const newState = {
      nextTaskId: 4,
      tasks: { 3: { title: '책 읽기', children: [] } },
    };

    expect(reducer(
      oldState,
      addTodo({ title: '책 읽기', children: [] }),
    )).toEqual(newState);
  });

  it('deletes task from todoList', () => {
    const oldState = {
      nextTaskId: 3,
      tasks: { 2: { title: '책 읽기', children: [] } },
    };
    const newState = {
      nextTaskId: 3,
      tasks: {},
    };

    expect(reducer(
      oldState,
      deleteTodo(2),
    )).toEqual(newState);
  });
});
