import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../redux_module/todoSlice';
import ActionButton from '../styled/ActionButton';

type InputBoxProps = {
  initialTitle?: string
};

const InputBox = ({ initialTitle }: InputBoxProps): JSX.Element => {
  const dispatch = useDispatch();

  const [taskTitle, setTaskTitle] = useState(initialTitle || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value);
  const handleClick = () => {
    dispatch(addTask(taskTitle));
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

      <ActionButton
        type="button"
        onClick={handleClick}
      >
        추가
      </ActionButton>
    </>
  );
};

export default InputBox;
