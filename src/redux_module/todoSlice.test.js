import reducer,
{
  addTask,
  deleteTask,
  updateCurrentTaskId,
} from './todoSlice';

describe('todoSlice', () => {
  context('when currentTaskId is 0', () => {
    it('adds new task to todoList and updates nextTaskId', () => {
      const oldState = {
        currentTaskId: '0',
        nextTaskId: '3',
        tasks: { },
      };
      const newState = {
        currentTaskId: '0',
        nextTaskId: '4',
        tasks: { 3: { title: '책 읽기', children: {} } },
      };

      expect(reducer(
        oldState,
        addTask({ title: '책 읽기', children: {} }),
      )).toEqual(newState);
    });
  });

  context('when currentTaskId is not 0', () => {
    it('adds new task to todoList, updates nextTaskId and appends taskId to children array', () => {
      const oldState = {
        currentTaskId: '1',
        nextTaskId: '2',
        tasks: { 1: { title: '책 읽기', children: {} } },
      };

      const newState = {
        currentTaskId: '1',
        nextTaskId: '3',
        tasks: {
          1: {
            title: '책 읽기',
            children: {
              2: { title: '애자일 공부', children: {} },
            },
          },
        },
      };

      expect(reducer(
        oldState,
        addTask({ title: '애자일 공부', children: {} }),
      )).toEqual(newState);
    });

    it('updates currentTaskId', () => {
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

  context('when tasks to delete is in top level', () => {
    it('deletes task from tasks', () => {
      const oldState = {
        tasks: {
          1: { title: '책 읽기1', children: {} },
          2: { title: '책 읽기2', children: {} },
        },
      };
      const newState = {
        tasks: { 1: { title: '책 읽기1', children: {} } },
      };

      expect(reducer(
        oldState,
        deleteTask('2'),
      )).toEqual(newState);
    });
  });

  context('when tasks to delete is not in top level', () => {
    it('deletes task from tasks and remove id in chidren', () => {
      const oldState = {
        tasks: {
          1: { title: '책 읽기', children: {} },
          2: {
            title: '애자일 공부',
            children: {
              3: { title: '서브 테스크 1', children: {} },
              4: { title: '서브 테스크 2', children: {} },
            },
          },
        },
      };

      const newState = {
        tasks: {
          1: { title: '책 읽기', children: {} },
          2: {
            title: '애자일 공부',
            children: {
              4: { title: '서브 테스크 2', children: {} },
            },
          },
        },
      };

      expect(reducer(
        oldState,
        deleteTask('3'),
      )).toEqual(newState);
    });
  });
});
