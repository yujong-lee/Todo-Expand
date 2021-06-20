import { MouseEventHandler } from 'react';

type SubTasksToggleType = {
  taskId: number
  isOpen: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
};

const SubTasksToggle = ({ taskId, isOpen, onClick }: SubTasksToggleType): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    data-testid={`button-${taskId}`}
  >
    {(isOpen) ? '접기' : '펼치기'}
  </button>
);

export default SubTasksToggle;
