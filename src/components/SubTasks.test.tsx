/**
 * @jest-environment jsdom
 */

import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import SubTasks from './SubTasks';

describe('SubTasks', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector) => selector({
      todo: {
        tasks: {
          1: { title: 'task1', subTasks: [] },
          2: { title: 'task2', subTasks: [] },
        },
      },
    }));
  });

  it('renders', () => {
    render(<SubTasks subTasks={[1, 2]} />);
  });
});
