/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useDispatch } from 'react-redux';

import InputBox from './InputBox';
import { updateCurrentTaskId } from './redux_module/todoSlice';

export default function App() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(updateCurrentTaskId('0'));

  return (
    <>
      <h1 onClick={handleClick}>
        todo-expand
      </h1>

      <InputBox />
    </>
  );
}
