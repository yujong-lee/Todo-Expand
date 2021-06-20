/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAppDispatch, useAppSelector } from './redux_module/hook';
import styled from '@emotion/styled';

import InputBox from './components/InputBox';
import Task from './components/Task';
import { updateCurrentTaskId } from './redux_module/todoSlice';
import { original, highlight } from './fixture/color';

export default function App() {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(updateCurrentTaskId(0));

  const currentTaskId = useAppSelector((state) => state.todo.currentTaskId);
  const isSelected = (currentTaskId === 0);

  type H1Props = {
    isSelected: boolean
  }

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

      <InputBox />
      <br />
      <Task id={0} />
    </>
  );
}
//Todo: 1. terra 2. daily report
