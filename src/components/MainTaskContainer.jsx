import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, updateCurrentTaskId } from '../redux_module/todoSlice';

import MainTask from './MainTask';

export default function MainTaskContainer({ id, isSubTasksOpen, setIsSubTasksOpen }) {
  const dispatch = useDispatch();

  const { title, subTasks } = useSelector((state) => state.todo.tasks[id]);
  const currentTaskId = useSelector((state) => state.todo.currentTaskId);

  const isSubTasksEmpty = (subTasks.length === 0);
  const isRootTask = (id === '0');
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
}
