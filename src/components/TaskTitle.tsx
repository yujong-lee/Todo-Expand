import { MouseEventHandler } from 'react';

import TitleButton from '../styled/TitleButton';

type TaskTitleProps = {
  title: string
  isSelected: boolean
  handleClick: MouseEventHandler<HTMLButtonElement>
};

const TaskTitle = ({ title, isSelected, handleClick }: TaskTitleProps): JSX.Element => (
  <TitleButton
    type="button"
    onClick={handleClick}
    isSelected={isSelected}
  >
    {title}
  </TitleButton>
);

export default TaskTitle;
