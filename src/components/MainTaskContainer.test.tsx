/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import MainTaskContainer from './MainTaskContainer';

describe('MainTaskContainer', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((selector) => selector({
      todo: {
        tasks: {
          0: { title: 'root', subTasks: [] },
        },
      },
    }));
  });

  it('renders', () => {
    render(
      <MainTaskContainer
        id={0}
        isSubTasksOpen={true}
        setIsSubTasksOpen={jest.fn()}
      />,
    );
  });
});
