import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('renders tasks from redux', () => {
    useSelector.mockImplementation((selector) => selector({
      todo: {
        tasks: {
          1: { title: '아무 것도 하지 말자', children: [] },
          2: { title: '애자일 공부', children: [] },
        },
      },
    }));

    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent('아무 것도 하지 말자');
    expect(container).toHaveTextContent('애자일 공부');
  });
});
