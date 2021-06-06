import { render, within } from '@testing-library/react';
import List from './List';

describe('List', () => {
  it('renders task title', () => {
    const tasks = [
      { id: 1, title: '아무 것도 하지 말자', children: [] },
      { id: 2, title: '애자일 공부', children: [] },
    ];
    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent('아무 것도 하지 말자');
    expect(container).toHaveTextContent('애자일 공부');
  });

  context('when item has no children', () => {
    it('renders 세부 button', () => {
      const tasks = [
        {
          id: 1,
          title: '아무 것도 하지 말자',
          children: [
            { id: 3, title: '그냥 누워있자', children: [] },
          ],
        },
      ];
      const { getByText } = render(<List tasks={tasks} />);

      expect(
        within(getByText('아무 것도 하지 말자'))
          .getByRole('button', { name: '세부' }),
      ).toBeInTheDocument();
    });
  });

  context('when item has no children', () => {
    it('renders 완료 button', () => {
      const tasks = [
        { id: 2, title: '애자일 공부', children: [] },
      ];
      const { getByText } = render(<List tasks={tasks} />);

      expect(
        within(getByText('애자일 공부'))
          .queryByRole('button', { name: '완료' }),
      ).toBeInTheDocument();
    });
  });
});
