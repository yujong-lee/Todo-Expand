/**
 * @jest-environment jsdom
 */

import { render, RenderResult } from '@testing-library/react';
import { MouseEventHandler } from 'react';
import given from 'given2'

import TaskTitle from './TaskTitle';
import { highlight, original } from '../fixture/color';

describe('TaskTitle', () => {
  const handleClick = jest.fn() as jest.MockedFunction<MouseEventHandler<HTMLButtonElement>>;

  const renderTaskTitle = (): RenderResult => {
    return render(
      <TaskTitle
      title="taskTitle"
      isSelected={given.isSelected}
      handleClick={handleClick}
    />)
  }

  beforeEach(() => {
    handleClick.mockClear()
  })

  it('renders button with title', () => {
    const { getByRole } = renderTaskTitle();

    expect(getByRole('button', { name: 'taskTitle' })).toBeInTheDocument();
  });

  context('when task is selected', () => {
    given('isSelected', () => true);

    it('renders button with highlight color', () => {
      const { getByRole } = renderTaskTitle()

      expect(getByRole('button', { name: 'taskTitle' })).toHaveStyle(`
        background-color: ${highlight};
      `);
    });
  });

  context('when task is not selected', () => {
    given('isSelected', () => false);

    it('renders button with original color', () => {
      const { getByRole } = renderTaskTitle()

      expect(getByRole('button', { name: 'taskTitle' })).toHaveStyle(`
        background-color: ${original};
      `);
    });
  });
});
