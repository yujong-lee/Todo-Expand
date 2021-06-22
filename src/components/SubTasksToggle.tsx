import { MouseEventHandler } from 'react';

import ActionButton from '../styled/ActionButton';

type SubTasksToggleType = {
  taskId: number
  isOpen: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
};

const SubTasksToggle = ({ taskId, isOpen, onClick }: SubTasksToggleType): JSX.Element => (
  <ActionButton
    type="button"
    onClick={onClick}
    data-testid={`button-${taskId}`}
  >
    {(isOpen) ? '접기' : '펼치기'}
  </ActionButton>
);

export default SubTasksToggle;
