import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux_module/todoSlice';

export default function InputBox() {
  const name = '할 일';
  const dispatch = useDispatch();

  const [taskTitle, setTaskTitle] = useState('');

  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={name}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <button
        type="button"
        onClick={() => {
          dispatch(addTask({ title: taskTitle, children: {} }));
          setTaskTitle('');
        }}
      >
        추가
      </button>
    </>
  );
}
