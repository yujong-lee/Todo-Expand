import { fireEvent, render } from '@testing-library/react';
import given from 'given2';

import SubTasksToggle from './SubTasksToggle';

describe('SubTasksToggle', () => {
  const handleClick = jest.fn();

  function renderSubTasksToggle() {
    return (
      render((
        <SubTasksToggle
          taskId="1"
          isOpen={given.isOpen}
          isEmpty={given.isEmpty}
          onClick={handleClick}
        />
      ))
    );
  }

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders button that has test id', () => {
    const { getByTestId } = renderSubTasksToggle();

    expect(getByTestId('button-1')).toBeInTheDocument();
  });

  it('listens to click event', () => {
    const { getByTestId } = renderSubTasksToggle();

    fireEvent.click(getByTestId('button-1'));
    expect(handleClick).toBeCalled();
  });

  context('when subTasks is empty', () => {
    given('isEmpty', () => true);

    it('renders "완료" button', () => {
      const { getByRole } = renderSubTasksToggle();

      expect(getByRole('button', { name: '완료' })).toBeInTheDocument();
    });
  });

  context('when subTasks is not empty', () => {
    given('isEmpty', () => false);

    context('when subTasks is opened', () => {
      given('isOpen', () => true);
      it('renders "접기" button', () => {
        const { getByRole } = renderSubTasksToggle();

        expect(getByRole('button', { name: '접기' })).toBeInTheDocument();
      });
    });

    context('when subTasks is closed', () => {
      given('isOpen', () => false);
      it('renders "펼치기" button', () => {
        const { getByRole } = renderSubTasksToggle();

        expect(getByRole('button', { name: '펼치기' })).toBeInTheDocument();
      });
    });
  });
});
