import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { deleteTask, updateCurrentTaskId } from './redux_module/todoSlice';
import { original, highlight } from './fixture/color';

export default function Task({ id, isOpen = true }) {
  const dispatch = useDispatch();

  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);
  const currentTaskId = useSelector((state) => state.todo.currentTaskId);

  const isSubTasksEmpty = (subTasks.length === 0);
  const isRootTask = (id === '0');
  const isSelected = (currentTaskId === id);

  const [isSubTasksOpen, setIsSubTasksOpen] = useState(isOpen);

  const handleClickComplete = () => dispatch(deleteTask(id));
  const handleCickDetail = () => setIsSubTasksOpen(!isSubTasksOpen);

  const handleClickTitle = () => dispatch(updateCurrentTaskId(id));
  const handleClickButton = (isSubTasksEmpty) ? handleClickComplete : handleCickDetail;

  const Button = styled.button`
  background-color: ${(props) => ((props.isSelected) ? highlight : original)};
  font-size: 14px;
  margin-bottom: 8px;
  color: black;
  &:hover {
    color: white;
  }
`;

  const buttonName = () => {
    if (isSubTasksEmpty) {
      return '완료';
    }

    return (isSubTasksOpen) ? '접기' : '펼치기';
  };

  return (
    <>
      {!isRootTask
        ? (
          <>
            <Button
              type="button"
              onClick={handleClickTitle}
              isSelected={isSelected}
            >
              {title}
            </Button>

            <button
              type="button"
              onClick={handleClickButton}
              data-testid={`button-${id}`}
            >
              {buttonName()}
            </button>
          </>
        )
        : null}

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
