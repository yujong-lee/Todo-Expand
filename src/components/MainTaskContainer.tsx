import { useAppDispatch, useAppSelector } from '../redux_module/hook';

import { deleteTask, updateCurrentTaskId } from '../redux_module/todoSlice';
import MainTask from './MainTask';

type MainTaskContainerProps = {
  id: number,
  isSubTasksOpen: boolean,
  setIsSubTasksOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const MainTaskContainer = (
  { id, isSubTasksOpen, setIsSubTasksOpen } : MainTaskContainerProps,
): JSX.Element => {
  const dispatch = useAppDispatch();

  const { title, subTasks } = useAppSelector((state) => state.todo.tasks[id]);
  const currentTaskId = useAppSelector((state) => state.todo.currentTaskId);

  const isSubTasksEmpty = (subTasks.length === 0);
  const isRootTask = (id === 0);
  const isSelected = (currentTaskId === id);

  const handleClickTitle = () => dispatch(updateCurrentTaskId(id));

  const handleClickComplete = () => dispatch(deleteTask(id));
  const handleClickDetail = () => setIsSubTasksOpen(!isSubTasksOpen);

  return (
    <MainTask
      id={id}
      title={title}
      isSelected={isSelected}
      isRootTask={isRootTask}
      isSubTasksEmpty={isSubTasksEmpty}
      isSubTasksOpen={isSubTasksOpen}
      handleClickTitle={handleClickTitle}
      handleClickComplete={handleClickComplete}
      handleClickDetail={handleClickDetail}
    />
  );
};

export default MainTaskContainer;
