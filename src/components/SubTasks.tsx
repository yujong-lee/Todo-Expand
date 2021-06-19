/* eslint-disable import/no-cycle */
import Task from './Task';

interface TaskItem {
  title: string
  subTask: string[]
}

export default function SubTasks({ subTasks }): JSX.Element {
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
