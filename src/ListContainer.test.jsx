import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import { deleteTask } from './redux_module/todoSlice';

describe('ListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('when item has no children', () => {
    it('deletes task with button', () => {
      useSelector.mockImplementation((selector) => selector({
        todo: {
          tasks: {
            2: { title: '애자일 공부', children: [] },
          },
        },
      }));

      const { getByRole } = render(<ListContainer />);

      fireEvent.click(getByRole('button', { name: '완료' }));

      expect(dispatch).toBeCalledWith(deleteTask('2'));
    });
  });
});
