import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders header', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('todo-expand');
  });
});
