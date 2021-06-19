import styled from '@emotion/styled';
import { original, highlight } from './fixture/color';

export default function TaskTitle({ title, isSelected, handleClick }) {
  const Button = styled.button`
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
