import { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

import { original, highlight } from '../fixture/color';

type TaskTitleProps = {
  title: string
  isSelected: boolean
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const TaskTitle = ({ title, isSelected, handleClick }: TaskTitleProps): JSX.Element =>  {

  type ButtonProps = {
    isSelected: boolean
  }

  const Button = styled.button<ButtonProps>`
    background-color: ${(props) => ((props.isSelected) ? highlight : original)};
    font-size: 14px;
    margin-bottom: 8px;
    color: black;
    &:hover {
      color: white;
    }
  `;

  return (
    <Button
      type="button"
      onClick={handleClick}
      isSelected={isSelected}
    >
      {title}
    </Button>
  );
}

export default TaskTitle
