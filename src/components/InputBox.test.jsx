import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import InputBox from './InputBox';
import { addTask } from '../redux_module/todoSlice';

describe('InputBox', () => {
  it('renders input control', () => {
    const { getByRole } = render(<InputBox />);

    expect(getByRole('textbox', { name: '할 일' })).toBeInTheDocument();
  });

  it('renders add button', () => {
    const { getByRole } = render(<InputBox />);

    expect(getByRole('button', { name: '추가' })).toBeInTheDocument();
  });

  it('adds tasks with button', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByRole } = render(<InputBox />);

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(
      addTask({ title: '' }),
    );
  });
});
