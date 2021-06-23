/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { useAppSelector } from '../redux_module/hook';
import MainTaskContainer from './MainTaskContainer';
import SubTasks from './SubTasks';

type TaskProps = {
  id: number
  isOpen?: boolean
};

const Task = ({ id, isOpen = true }: TaskProps): JSX.Element => {
  const { subTasks } = useAppSelector((state) => state.todo.tasks[id]);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState<boolean>(isOpen);

  return (
    <>
      <MainTaskContainer
        id={id}
        isSubTasksOpen={isSubTasksOpen}
        setIsSubTasksOpen={setIsSubTasksOpen}
      />
      <SubTasks
        tasks={subTasks}
        isOpen={isSubTasksOpen}
      />
    </>
  );
};
export default Task;
