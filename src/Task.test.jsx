import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import given from 'given2';

import Task from './Task';

jest.mock('react-redux');

describe('Task', () => {
  function renderTask({ id }) {
    return render(
      <Task
        id={id}
        isOpen={given.isOpen}
      />,
    );
  }

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
    const { container } = renderTask({ id: '1' });

    expect(container).toHaveTextContent('첫번째 할일');
  });

  context('when subTasks is opened', () => {
    given('isOpen', () => true);

    it('renders subTask title', () => {
      const { container } = renderTask({ id: '1' });

      expect(container).toHaveTextContent('첫번째 할일');
      expect(container).toHaveTextContent('두번째 할일');
      expect(container).toHaveTextContent('세번째 할일');
    });
  });

  context('when subTasks is not opened', () => {
    given('isOpen', () => false);

    it("doesn't renders subTask title", () => {
      const { container } = renderTask({ id: '1' });

      expect(container).toHaveTextContent('첫번째 할일');
      expect(container).not.toHaveTextContent('두번째 할일');
    });
  });
});
