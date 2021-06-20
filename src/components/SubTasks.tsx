/* eslint-disable import/no-cycle */
import Task from './Task';

const SubTasks = ({ subTasks }: {subTasks: string[]}): JSX.Element => {
  return (
    <ul>
      {subTasks.map((subTaskId) => (
        <li key={subTaskId}>
          <Task id={subTaskId} />
        </li>
      ))}
    </ul>
  );
}

export default SubTasks
