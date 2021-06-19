import TaskTitle from './TaskTitle';
import CompleteButton from './CompleteButton';
import SubTasksToggle from './SubTasksToggle';

export default function MainTask({
  id, title,
  isSelected, isRootTask, isSubTasksEmpty, isSubTasksOpen,
  handleClickTitle, handleClickComplete, handleClickDetail,
}) {
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
    </>
  );
}
