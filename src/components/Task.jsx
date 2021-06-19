import { useState } from 'react';
import { useSelector } from 'react-redux';

import MainTask from './MainTask';

export default function Task({ id, isOpen = true }) {
  const { subTasks } = useSelector((state) => state.todo.tasks[id]);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  return (
    <>
      <MainTask
        id={id}
        isSubTasksOpen={isSubTasksOpen}
        setIsSubTasksOpen={setIsSubTasksOpen}
      />

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
