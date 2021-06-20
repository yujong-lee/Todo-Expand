import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../redux_module/todoSlice';

type InputBoxProps = {
  initialTitle?: string
};

const InputBox = ({ initialTitle }: InputBoxProps): JSX.Element => {
  const dispatch = useDispatch();

  const [taskTitle, setTaskTitle] = useState(initialTitle || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value);
  const handleClick = () => {
    dispatch(addTask({ title: taskTitle }));
    setTaskTitle('');
  };

  return (
    <>
      <label htmlFor="input-task">
        할 일
      </label>
      <input
        type="text"
        id="input-task"
        placeholder="할 일"
        value={taskTitle}
        onChange={handleChange}
      />

      <button
        type="button"
        onClick={handleClick}
      >
        추가
      </button>
    </>
  );
};

export default InputBox;
