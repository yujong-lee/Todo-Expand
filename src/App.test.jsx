import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders header', () => {
    useSelector.mockImplementation((selector) => selector({
      todo: {
        tasks: {
          0: { title: 'root', subTasks: [] },
        },
      },
    }));

    const { container } = render(<App />);

    expect(container).toHaveTextContent('Todo-expand');
  });
});
