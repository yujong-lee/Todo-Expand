import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders header', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('todo-expand');
  });

  it('renders input control', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('textbox', { name: '할 일' })).toBeInTheDocument();
  });
});
