/* eslint-disable import/no-cycle */
import Task from './Task';

type SubTasksProps = {
  subTasks: number[]
};

const SubTasks = ({ subTasks }: SubTasksProps): JSX.Element => (
  <ul>
    {subTasks.map((subTaskId) => (
      <li key={subTaskId}>
        <Task id={subTaskId} />
      </li>
    ))}
  </ul>
);

export default SubTasks;
