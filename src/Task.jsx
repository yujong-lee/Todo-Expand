import { useSelector } from 'react-redux';

export default function Task({ id, isOpen }) {
  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);

  return (
    <>
      <h2>{title}</h2>
      {isOpen
        ? (
          <ul>
            {subTasks.map((subTaskId) => (
              <li key={subTaskId}>
                <Task id={subTaskId} isOpen={false} />
              </li>
            ))}
          </ul>
        )
        : null}

    </>
  );
}
