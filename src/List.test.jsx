import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const renderList = ({ tasks }) => (
    render(<List
      tasks={tasks}
      handleItemClick={jest.fn()}
      handleCompleteButton={jest.fn()}
      handleDetailButton={jest.fn()}
    />)
  );

  it('renders task title', () => {
    const tasks = {
      1: { title: '아무 것도 하지 말자', children: [] },
      2: { title: '애자일 공부', children: [] },
    };

    const { container } = renderList({ tasks });

    expect(container).toHaveTextContent('아무 것도 하지 말자');
    expect(container).toHaveTextContent('애자일 공부');
  });

  context('when item has children', () => {
    it('renders 세부 button', () => {
      const tasks = {
        1: {
          title: '아무 것도 하지 말자',
          children: { 2: { title: '', children: {} } },
        },
      };

      const { getByRole } = renderList({ tasks });

      expect(getByRole('button', { name: '세부' })).toBeInTheDocument();
    });
  });

  context('when item has no children', () => {
    it('renders 완료 button', () => {
      const tasks = {
        2: { title: '애자일 공부', children: [] },
      };

      const { getByRole } = renderList({ tasks });

      expect(getByRole('button', { name: '완료' })).toBeInTheDocument();
    });
  });
});
