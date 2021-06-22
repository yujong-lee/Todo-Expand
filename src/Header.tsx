import styled from '@emotion/styled';

import { useAppDispatch, useAppSelector } from './redux_module/hook';
import { updateCurrentTaskId } from './redux_module/todoSlice';
import { original, highlight } from './fixture/color';

type ParProps = {
  isSelected: boolean
};

type HeaderProps = {
  initialTaskId?: number
};

const P = styled.p<ParProps>(({ isSelected }) => ({
  color: (isSelected) ? highlight : original,
  fontSize: '2em',
  '&:hover': {
    fontWeight: 'bold',
  },
}));

const Header = ({ initialTaskId }: HeaderProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateCurrentTaskId(0));

  const currentTaskId = (initialTaskId === undefined)
    ? useAppSelector((state) => state.todo.currentTaskId)
    : initialTaskId;

  const isSelected = (currentTaskId === 0);

  return (
    <header>
      <P
        onClick={handleClick}
        isSelected={isSelected}
      >
        Todo-expand
      </P>
    </header>
  );
};

export default Header;
