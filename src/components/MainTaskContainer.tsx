import { useAppDispatch, useAppSelector } from '../redux_module/hook';

import { deleteTask, toggleOpen, updateCurrentTaskId } from '../redux_module/todoSlice';
import MainTask from './MainTask';

type MainTaskContainerProps = {
  id: number,
};

const MainTaskContainer = ({ id } : MainTaskContainerProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { title, subTasks, isOpen } = useAppSelector((state) => state.todo.tasks[id]);
  const currentTaskId = useAppSelector((state) => state.todo.currentTaskId);

  const isSubTasksEmpty = (subTasks.length === 0);
  const isRootTask = (id === 0);
  const isSelected = (currentTaskId === id);

  const handleClickTitle = () => dispatch(updateCurrentTaskId(id));

  const handleClickComplete = () => dispatch(deleteTask(id));
  const handleClickDetail = () => dispatch(toggleOpen(id));

  return (
    <MainTask
      id={id}
      title={title}
      isSelected={isSelected}
      isRootTask={isRootTask}
      isSubTasksEmpty={isSubTasksEmpty}
      isSubTasksOpen={isOpen}
      handleClickTitle={handleClickTitle}
      handleClickComplete={handleClickComplete}
      handleClickDetail={handleClickDetail}
    />
  );
};

export default MainTaskContainer;
