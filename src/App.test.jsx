import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeAll(() => {
    useSelector.mockImplementation((selector) => selector({
      todo: {
        tasks: [
          {
            id: 1,
            title: '아무 것도 하지 말자',
            children: [
              { id: 3, title: '그냥 누워있자', children: [] },
            ],
          },
          { id: 2, title: '애자일 공부', children: [] },
        ],
      },
    }));
  });

  it('renders header', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('todo-expand');
  });

  it('renders input control', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('textbox', { name: '할 일' })).toBeInTheDocument();
  });
});
