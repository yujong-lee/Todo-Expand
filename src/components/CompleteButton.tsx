import { MouseEventHandler } from 'react';

type CompleteButtonType = {
  id: number
  handleClick: MouseEventHandler<HTMLButtonElement>
};

const CompleteButton = ({ id, handleClick }: CompleteButtonType): JSX.Element => (
  <button
    type="button"
    onClick={handleClick}
    data-testid={`button-${id}`}
  >
    완료
  </button>
);

export default CompleteButton;
