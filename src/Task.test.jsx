import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Task from './Task';

jest.mock('react-redux');

describe('Task', () => {
  beforeAll(() => {
    useSelector.mockImplementation((selector) => selector({
      tasks: {
        1: { title: '첫번째 할일', subTasks: ['2'] },
        2: { title: '두번째 할일', subTasks: ['3'] },
        3: { title: '세번째 할일', subTasks: [] },
      },
    }));
  });

  it('renders task title', () => {
    const { container } = render(
      <Task
        id="1"
        subTasks={[]}
        isOpen={false}
      />,
    );

    expect(container).toHaveTextContent('첫번째 할일');
  });

  context('isOpen is set to true', () => {
    it('renders subTask title', () => {
      const { container } = render(
        <Task
          id="1"
          subTasks={['2']}
          isOpen={true}
        />,
      );

      expect(container).toHaveTextContent('첫번째 할일');
      expect(container).toHaveTextContent('두번째 할일');
      expect(container).toHaveTextContent('세번째 할일');
    });
  });

  context('isOpen is set to false', () => {
    it("doesn't renders subTask title", () => {
      const { container } = render(
        <Task
          id="1"
          title="첫번째 할일"
          subTasks={['2']}
          isOpen={false}
        />,
      );

      expect(container).toHaveTextContent('첫번째 할일');
      expect(container).not.toHaveTextContent('두번째 할일');
    });
  });
});
