/**
 * @jest-environment jsdom
 */

import { useDispatch, useSelector } from 'react-redux';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import given from 'given2';

import { deleteTask, updateCurrentTaskId } from '../redux_module/todoSlice';
import Task from './Task';

describe('Task', () => {
  const dispatch = jest.fn();

  const renderTask = (id: number): RenderResult => render((
    <Task
      id={id}
      isOpen={given.isOpen}
    />
  ));

  beforeEach(() => {
    dispatch.mockClear();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);

    (useSelector as jest.Mock).mockImplementation((selector) => selector({
      todo: { tasks: given.tasks },
    }));
  });

  describe('title', () => {
    given('tasks', () => ({
      1: { title: 'task1', subTasks: [] },
    }));

    it('is rendered', () => {
      const { container } = renderTask(1);

      expect(container).toHaveTextContent('task1');
    });

    context('when title is cilcked', () => {
      it('updates currentTaskId', () => {
        const { getByText } = renderTask(1);
        fireEvent.click(getByText('task1'));

        expect(dispatch).toBeCalledWith(updateCurrentTaskId(1));
      });
    });
  });

  context('when id is 0', () => {
    given('tasks', () => ({
      0: { title: 'root', subTasks: [] },
    }));

    it('is not rendered', () => {
      const { queryByText } = renderTask(0);

      expect(queryByText('root')).not.toBeInTheDocument();
    });
  });

  context('when subTasks is opened', () => {
    given('isOpen', () => true);
    given('tasks', () => ({
      1: { title: 'task1', subTasks: [2] },
      2: { title: 'task2', subTasks: [] },
    }));

    it('renders subTask title', () => {
      const { container } = renderTask(1);

      expect(container).toHaveTextContent('task1');
      expect(container).toHaveTextContent('task2');
    });
  });

  context('when subTasks is not opened', () => {
    given('isOpen', () => false);
    given('tasks', () => ({
      1: { title: 'task1', subTasks: [2] },
      2: { title: 'task2', subTasks: [] },
    }));

    it("doesn't renders subTask title", () => {
      const { container } = renderTask(1);

      expect(container).toHaveTextContent('task1');
      expect(container).not.toHaveTextContent('task2');
    });
  });

  context('when subTasks is empty', () => {
    given('tasks', () => ({
      1: { title: 'task1', subTasks: [] },
    }));

    it('renders "완료" button', () => {
      const { getByRole } = renderTask(1);

      fireEvent.click(getByRole('button', { name: '완료' }));

      expect(dispatch).toBeCalledWith(deleteTask(1));
    });
  });

  context('when subTasks is not empty', () => {
    given('tasks', () => ({
      1: { title: 'task1', subTasks: [2] },
      2: { title: 'task2', subTasks: [] },
    }));

    it('renders "펼치기" button to unfold subTasks', () => {
      given('isOpen', () => false);

      const { container, getByRole } = renderTask(1);

      expect(container).toHaveTextContent('task1');
      expect(container).not.toHaveTextContent('task2');

      fireEvent.click(getByRole('button', { name: '펼치기' }));

      expect(container).toHaveTextContent('task1');
      expect(container).toHaveTextContent('task2');
    });

    it('renders "접기" button to fold subTasks', () => {
      given('isOpen', () => true);

      const { container, getByRole } = renderTask(1);

      expect(container).toHaveTextContent('task1');
      expect(container).toHaveTextContent('task2');

      fireEvent.click(getByRole('button', { name: '접기' }));

      expect(container).toHaveTextContent('task1');
      expect(container).not.toHaveTextContent('task2');
    });
  });
});
