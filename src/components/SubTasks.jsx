import Task from './Task';

export default function SubTasks({ subTasks }) {
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
