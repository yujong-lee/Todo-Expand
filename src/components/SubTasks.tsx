/* eslint-disable import/no-cycle */
import { useAppSelector } from '../redux_module/hook';
import Task from './Task';

type SubTasksProps = {
  id: number
};

const SubTasks = ({ id }: SubTasksProps): JSX.Element => {
  const { isOpen, subTasks } = useAppSelector((state) => state.todo.tasks[id]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <ul>
      {subTasks.map((taskId) => (
        <li key={taskId}>
          <Task id={taskId} />
        </li>
      ))}
    </ul>
  );
};

export default SubTasks;
