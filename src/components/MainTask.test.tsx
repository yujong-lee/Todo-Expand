/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import MainTask from './MainTask';

describe('MainTask', () => {
  it('renders', () => {
    render(
      <MainTask
        id={1}
        title="title"
        isSelected={true}
        isRootTask={false}
        isSubTasksEmpty={true}
        isSubTasksOpen={true}
        handleClickTitle={jest.fn()}
        handleClickComplete={jest.fn()}
        handleClickDetail={jest.fn()}
      />,
    );
  });
});
