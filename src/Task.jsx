import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, updateCurrentTaskId } from './redux_module/todoSlice';

export default function Task({ id, isOpen = true }) {
  const dispatch = useDispatch();

  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);
  const isSubTasksEmpty = (subTasks.length === 0);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  const handleClickComplete = () => dispatch(deleteTask(id));
  const handleCickDetail = () => setIsSubTasksOpen(!isSubTasksOpen);

  const handleClickTitle = () => dispatch(updateCurrentTaskId(id));
  const handleClickButton = (isSubTasksEmpty) ? handleClickComplete : handleCickDetail;

  const buttonName = () => {
    if (isSubTasksEmpty) {
      return '완료';
    }

    return (isSubTasksOpen) ? '접기' : '펼치기';
  };

  return (
    <>
      {(id !== '0')
        ? (
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
              {buttonName()}
            </button>
          </>
        )
        : null}

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
