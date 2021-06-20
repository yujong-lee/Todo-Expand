/**
 * @jest-environment jsdom
 */

import { render, RenderResult, fireEvent } from '@testing-library/react';

import CompleteButton from './CompleteButton';

describe('CompleteButton', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  const renderCompleteButton = (): RenderResult => {
    return (
      render((
        <CompleteButton
          id="1"
          handleClick={handleClick}
        />
      ))
    );
  }

  it('renders "완료" button', () => {
    const { getByRole } = renderCompleteButton();

    expect(getByRole('button', { name: '완료' })).toBeInTheDocument();
  });

  it('button with test id', () => {
    const { getByTestId } = renderCompleteButton();

    expect(getByTestId('button-1')).toBeInTheDocument();
  });

  it('renders button listening click event', () => {
    const { getByRole } = renderCompleteButton();

    fireEvent.click(getByRole('button', { name: '완료' }));
    expect(handleClick).toBeCalled();
  });
});
