import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';

import Task from './Task';
import { updateCurrentTaskId } from './redux_module/todoSlice';

jest.mock('react-redux');

describe('Task', () => {
  const dispatch = jest.fn();

  function renderTask({ id }) {
    return render(
      <Task
        id={id}
        isOpen={given.isOpen}
      />,
    );
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      todo: {
        tasks: {
          0: { title: 'root', subTasks: ['1'] },
          1: { title: 'task1', subTasks: ['2', '3'] },
          2: { title: 'task2', subTasks: [] },
          3: { title: 'task3', subTasks: [] },
        },
      },
    }));
  });

  it('renders task title', () => {
    const { container } = renderTask({ id: '3' });

    expect(container).toHaveTextContent('task3');
  });

  context('when subTasks is opened', () => {
    given('isOpen', () => true);

    it('renders subTask title', () => {
      const { container } = renderTask({ id: '1' });

      expect(container).toHaveTextContent('task1');
      expect(container).toHaveTextContent('task2');
      expect(container).toHaveTextContent('task3');
    });
  });

  context('when subTasks is not opened', () => {
    given('isOpen', () => false);

    it("doesn't renders subTask title", () => {
      const { container } = renderTask({ id: '1' });

      expect(container).toHaveTextContent('task1');
      expect(container).not.toHaveTextContent('task2');
      expect(container).not.toHaveTextContent('task3');
    });
  });

  context('when title is cilcked', () => {
    it('updates currentTaskId', () => {
      const { getByText } = renderTask({ id: '1' });
      fireEvent.click(getByText('task1'));

      expect(dispatch).toBeCalledWith(updateCurrentTaskId('1'));
    });
  });

  it('renders "세부" button to open subTasks', () => {
    given('isOpen', () => true);

    const { container, getByTestId } = renderTask({ id: '0' });

    expect(container).toHaveTextContent('task2');
    expect(container).toHaveTextContent('task3');

    fireEvent.click(getByTestId('button-1'));

    expect(container).not.toHaveTextContent('task2');
    expect(container).not.toHaveTextContent('task3');
  });
});

// Todo: 펼쳤을 때 하위꺼 다 펼치는 문제 -> 결국 리덕스로 관리해야하나
