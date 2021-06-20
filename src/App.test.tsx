/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';
import { highlight, original } from './fixture/color';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector) => selector({
      todo: {
        currentTaskId: 0,
        tasks: {
          0: { title: 'root', subTasks: [1] },
          1: { title: 'task1', subTasks: [] },
        },
      },
    }));
  });

  context('when root is selected', () => {
    it('renders header with highlight color', () => {
      const { getByText } = render(<App initialTaskId={0} />);

      expect(getByText('Todo-expand')).toHaveStyle(`
        background-color: ${highlight};
      `);
    });
  });

  context('when task is selected', () => {
    it('renders header with original color', () => {
      const { getByText } = render(<App initialTaskId={1} />);

      expect(getByText('Todo-expand')).toHaveStyle(`
        background-color: ${original};
      `);
    });
  });
});
