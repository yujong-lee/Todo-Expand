import { render } from '@testing-library/react';

import InputBox from './InputBox';

describe('InputBox', () => {
  it('renders input control', () => {
    const { getByRole } = render(<InputBox />);
    expect(getByRole('textbox', { name: '할 일' })).toBeInTheDocument();
  });
});
