/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import SubTasks from './SubTasks';

describe('SubTasks', () => {
  it('renders', () => {
    (useSelector as jest.Mock).mockImplementation((selector) => selector({
      todo: {
        tasks: {
          1: { title: 'task1', subTasks: [] },
          2: { title: 'task2', subTasks: [] },
        },
      },
    }));

    render(<SubTasks subTasks={[1, 2]} />);
  });
});
