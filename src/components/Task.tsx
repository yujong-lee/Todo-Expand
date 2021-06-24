/* eslint-disable import/no-cycle */

import MainTaskContainer from './MainTaskContainer';
import SubTasksContainer from './SubTasksContainer';

type TaskProps = {
  id: number
};

const Task = ({ id }: TaskProps): JSX.Element => (
  <>
    <MainTaskContainer id={id} />
    <SubTasksContainer id={id} />
  </>
);
export default Task;
