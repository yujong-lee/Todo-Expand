import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, updateCurrentTaskId } from './redux_module/todoSlice';

export default function Task({ id, isOpen = true }) {
  const dispatch = useDispatch();

  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  const handleClickTitle = () => dispatch(updateCurrentTaskId(id));

  const buttonName = (subTasks.length === 0) ? '완료' : '세부';

  const handleClickButton = (subTasks.length === 0) // Todo: 이름 변경
    ? () => dispatch(deleteTask(id))
    : () => setIsSubTasksOpen(!isSubTasksOpen);

  return (
    <>
      <button
        type="button"
        onClick={handleClickTitle}
      >
        {title}
      </button>

      <button
        type="button"
        onClick={handleClickButton}
        data-testid={`button-${id}`}
      >
        {buttonName}
      </button>

      {isSubTasksOpen
        ? (
          <ul>
            {subTasks.map((subTaskId) => (
              <li key={subTaskId}>
                <Task id={subTaskId} />
              </li>
            ))}
          </ul>
        )
        : null}
    </>
  );
}
