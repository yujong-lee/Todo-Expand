import { MouseEventHandler } from 'react';

import TaskTitle from './TaskTitle';
import CompleteButton from './CompleteButton';
import SubTasksToggle from './SubTasksToggle';

type MainTaskProps = {
  id: number,
  title: string,
  isSelected: boolean,
  isRootTask: boolean,
  isSubTasksEmpty: boolean,
  isSubTasksOpen: boolean,
  handleClickTitle: MouseEventHandler<HTMLButtonElement>
  handleClickComplete: MouseEventHandler<HTMLButtonElement>
  handleClickDetail: MouseEventHandler<HTMLButtonElement>
};

const MainTask = ({
  id, title,
  isSelected, isRootTask, isSubTasksEmpty, isSubTasksOpen,
  handleClickTitle, handleClickComplete, handleClickDetail,
}: MainTaskProps): JSX.Element => {
  if (isRootTask) {
    return <></>;
  }

  return (
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
            onClick={handleClickDetail}
          />
        )}
    </>
  );
};

export default MainTask;
