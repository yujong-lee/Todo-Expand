import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCurrentTaskId } from './redux_module/todoSlice';

export default function Task({ id, isOpen = true }) {
  const dispatch = useDispatch();

  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  const handleClick = () => dispatch(updateCurrentTaskId(id));

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
      >
        {title}
      </button>

      <button
        type="button"
        onClick={() => setIsSubTasksOpen(!isSubTasksOpen)}
        data-testid={`button-${id}`}
      >
        세부
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
