import { MouseEventHandler } from 'react';

import TaskTitle from './TaskTitle';
import TaskButton from './TaskButton';

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

      <TaskButton
        id={id}
        isSubTasksEmpty={isSubTasksEmpty}
        isSubTasksOpen={isSubTasksOpen}
        handleClickComplete={handleClickComplete}
        handleClickDetail={handleClickDetail}
      />
    </>
  );
};

export default MainTask;
