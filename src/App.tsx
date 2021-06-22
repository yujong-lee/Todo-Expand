/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from './redux_module/hook';

import { updateCurrentTaskId } from './redux_module/todoSlice';
import { original, highlight } from './fixture/color';
import Input from './components/Input';
import Task from './components/Task';

type ParProps = {
  isSelected: boolean
};

const P = styled.p<ParProps>(({ isSelected }) => ({
  color: (isSelected) ? highlight : original,
  fontSize: '2em',
  '&:hover': {
    fontWeight: 'bold',
  },
}));

const Container = styled.div({
  width: '80%',
  margin: '0 auto',
});

type AppProps = {
  initialTaskId?: number
};

export default function App({ initialTaskId }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateCurrentTaskId(0));

  const currentTaskId = useAppSelector((state) => state.todo.currentTaskId);
  const isSelected = ((initialTaskId || currentTaskId) === 0);

  return (
    <Container>
      <header>
        <P
          onClick={handleClick}
          isSelected={isSelected}
        >
          Todo-expand
        </P>
      </header>

      <Input />
      <br />
      <Task id={0} />
    </Container>
  );
}
