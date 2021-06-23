/* eslint-disable import/no-cycle */

import MainTaskContainer from './MainTaskContainer';
import SubTasks from './SubTasks';

type TaskProps = {
  id: number
};

const Task = ({ id }: TaskProps): JSX.Element => (
  <>
    <MainTaskContainer id={id} />
    <SubTasks id={id} />
  </>
);
export default Task;
