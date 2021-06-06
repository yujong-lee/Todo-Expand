import reducer, { addTodo, deleteTodo } from './todoSlice';

describe('todoSlice', () => {
  it('adds new task to todoList', () => {
    const oldState = { tasks: [] };
    const newState = {
      tasks: [
        { id: 2, title: '책 읽기', children: [] },
      ],
    };

    expect(reducer(
      oldState,
      addTodo({ id: 2, title: '책 읽기', children: [] }),
    )).toEqual(newState);
  });

  it('deletes task from todoList', () => {
    const oldState = {
      tasks: [
        { id: 2, title: '책 읽기', children: [] },
      ],
    };
    const newState = { tasks: [] };

    expect(reducer(
      oldState,
      deleteTodo(2),
    )).toEqual(newState);
  });
});
