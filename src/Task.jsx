import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, updateCurrentTaskId } from './redux_module/todoSlice';
import SubTasksToggle from './SubTasksToggle';
import TaskTitle from './TaskTitle';

export default function Task({ id, isOpen = true }) {
  const dispatch = useDispatch();

  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);
  const currentTaskId = useSelector((state) => state.todo.currentTaskId);

  const isSubTasksEmpty = (subTasks.length === 0);
  const isRootTask = (id === '0');
  const isSelected = (currentTaskId === id);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  const handleClickComplete = () => dispatch(deleteTask(id));
  const handleClickDetail = () => setIsSubTasksOpen(!isSubTasksOpen);

  const handleClickTitle = () => dispatch(updateCurrentTaskId(id));

  function CompleteButton() {
    return (
      <button
        type="button"
        onClick={handleClickComplete}
        data-testid={`button-${id}`}
      >
        완료
      </button>
    );
  }
  return (
    <>
      {isRootTask
        ? null
        : (
          <>
            <TaskTitle
              title={title}
              isSelected={isSelected}
              handleClick={handleClickTitle}
            />

            {isSubTasksEmpty
              ? (<CompleteButton />)
              : (
                <SubTasksToggle
                  taskId={id}
                  isOpen={isSubTasksOpen}
                  isEmpty={isSubTasksEmpty}
                  onClick={handleClickDetail}
                />
              )}
          </>
        )}

      {isSubTasksOpen
        ? (
          <ul>
            {subTasks.map((subTaskId) => (
              <li key={subTaskId}>
                <Task id={subTaskId} />
              </li>
            ))}
          </ul>
        )
        : null}
    </>
  );
}
