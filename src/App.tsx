/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from './redux_module/hook';

import { updateCurrentTaskId } from './redux_module/todoSlice';
import { original, highlight } from './fixture/color';
import Input from './components/Input';
import Task from './components/Task';

type AppProps = {
  initialTaskId?: number
};

export default function App({ initialTaskId }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateCurrentTaskId(0));

  const currentTaskId = useAppSelector((state) => state.todo.currentTaskId);
  const isSelected = ((initialTaskId || currentTaskId) === 0);

  type H1Props = {
    isSelected: boolean
  };

  const H1 = styled.h1<H1Props>`
  background-color: ${(props) => ((props.isSelected) ? highlight : original)};
`;

  return (
    <>
      <H1
        onClick={handleClick}
        isSelected={isSelected}
      >
        Todo-expand
      </H1>

      <Input />
      <br />
      <Task id={0} />
    </>
  );
}
// Todo: 1. terra 2. daily report
// Todo: codecept
// watchman
// 바벨, 웹팩 콘피그 오류
// useSelector 등 mock제대로? useSelctro mockimple 자동완성
