/* eslint-disable import/no-cycle */
import Task from './Task';

type SubTasksProps = {
  tasks: number[]
  isOpen: boolean
};

const SubTasks = ({ tasks, isOpen }: SubTasksProps): JSX.Element => {
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
