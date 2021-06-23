/* eslint-disable import/no-cycle */

import { useAppSelector } from '../redux_module/hook';
import MainTaskContainer from './MainTaskContainer';
import SubTasks from './SubTasks';

type TaskProps = {
  id: number
};

const Task = ({ id }: TaskProps): JSX.Element => {
  const subTasks = useAppSelector((state) => state.todo.tasks[id].subTasks);

  return (
    <>
      <MainTaskContainer
        id={id}
      />
      <SubTasks
        id={id}
        tasks={subTasks}
      />
    </>
  );
};
export default Task;
