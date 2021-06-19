/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { useSelector } from 'react-redux';

import MainTaskContainer from './MainTaskContainer';
import SubTasks from './SubTasks';

export default function Task({ id, isOpen = true }) {
  const { subTasks } = useSelector((state) => state.todo.tasks[id]);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  return (
    <>
      <MainTaskContainer
        id={id}
        isSubTasksOpen={isSubTasksOpen}
        setIsSubTasksOpen={setIsSubTasksOpen}
      />

      {isSubTasksOpen
        ? (<SubTasks subTasks={subTasks} />)
        : null}
    </>
  );
}
