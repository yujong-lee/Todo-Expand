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
          1: { title: 'task1', subTasks: [2, 3], isOpen: true },
          2: { title: 'task2', subTasks: [], isOpen: true },
          3: { title: 'task3', subTasks: [], isOpen: true },
        },
      },
    }));
  });

  it('renders', () => {
    render((
      <SubTasks id={1} />
    ));
  });
});
