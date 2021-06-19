import { render } from '@testing-library/react';
import given from 'given2';

import TaskTitle from './TaskTitle';
import { highlight, original } from '../fixture/color';

describe('TaskTitle', () => {
  it('renders button with title', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(<TaskTitle
      title="taskTitle"
      isSelected={given.isSelected}
      onClick={handleClick}
    />);

    expect(getByRole('button', { name: 'taskTitle' })).toBeInTheDocument();
  });

  context('when task is selected', () => {
    given('isSelected', () => true);

    it('renders button with highlight color', () => {
      const handleClick = jest.fn();

      const { getByRole } = render(<TaskTitle
        title="taskTitle"
        isSelected={given.isSelected}
        onClick={handleClick}
      />);

      expect(getByRole('button', { name: 'taskTitle' })).toHaveStyle(`
        background-color: ${highlight};
      `);
    });
  });

  context('when task is not selected', () => {
    given('isSelected', () => false);

    it('renders button with original color', () => {
      const handleClick = jest.fn();

      const { getByRole } = render(<TaskTitle
        title="taskTitle"
        isSelected={given.isSelected}
        onClick={handleClick}
      />);

      expect(getByRole('button', { name: 'taskTitle' })).toHaveStyle(`
        background-color: ${original};
      `);
    });
  });
});
