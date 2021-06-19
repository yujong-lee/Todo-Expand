import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, updateCurrentTaskId } from './redux_module/todoSlice';
import TaskTitle from './TaskTitle';
import CompleteButton from './CompleteButton';
import SubTasksToggle from './SubTasksToggle';

export default function Task({ id, isOpen = true }) {
  const dispatch = useDispatch();

  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);
  const currentTaskId = useSelector((state) => state.todo.currentTaskId);

  const isSubTasksEmpty = (subTasks.length === 0);
  const isRootTask = (id === '0');
  const isSelected = (currentTaskId === id);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  const handleClickTitle = () => dispatch(updateCurrentTaskId(id));

  const handleClickComplete = () => dispatch(deleteTask(id));
  const handleClickDetail = () => setIsSubTasksOpen(!isSubTasksOpen);

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
              ? (
                <CompleteButton
                  id={id}
                  handleClick={handleClickComplete}
                />
              )
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
