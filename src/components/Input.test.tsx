/**
 * @jest-environment jsdom
 */

import { useDispatch } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { addTask } from '../redux_module/todoSlice';
import Input from './Input';

describe('Input', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
  });

  it('renders input control', () => {
    const { getByRole } = render(<Input />);

    expect(getByRole('textbox', { name: '할 일' })).toBeInTheDocument();
  });

  it('renders add button', () => {
    const { getByRole } = render(<Input />);

    expect(getByRole('button', { name: '추가' })).toBeInTheDocument();
  });

  it('adds tasks with button', () => {
    const { getByRole } = render(<Input initialTitle="task1" />);

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(
      addTask('task1'),
    );
  });
});
