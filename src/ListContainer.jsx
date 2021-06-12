import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { deleteTask, updateCurrentTaskId } from './redux_module/todoSlice';

export default function ListContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const handleDetailButton = () => null; // Todo 세부버튼
  const handleItemClick = (id) => dispatch(updateCurrentTaskId(id));
  const handleCompleteButton = (id) => dispatch(deleteTask(id));

  return (
    <List
      tasks={tasks}
      handleItemClick={handleItemClick}
      handleCompleteButton={handleCompleteButton}
      handleDetailButton={handleDetailButton}
    />
  );
}
