/* eslint-disable import/no-cycle */
import { useAppSelector } from '../redux_module/hook';
import Task from './Task';

type SubTasksProps = {
  id: number
  tasks: number[]
};

const SubTasks = ({ id, tasks }: SubTasksProps): JSX.Element => {
  const isOpen = useAppSelector((state) => state.todo.tasks[id].isOpen);

  if (!isOpen) {
    return <></>;
  }

  return (
    <ul>
      {tasks.map((taskId) => (
        <li key={taskId}>
          <Task id={taskId} />
        </li>
      ))}
    </ul>
  );
};

export default SubTasks;
