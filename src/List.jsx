/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useDispatch } from 'react-redux';

import { deleteTask, updateCurrentTaskId } from './redux_module/todoSlice';

export default function List({ tasks }) {
  // Todo: entries sort
  const dispatch = useDispatch();

  return (
    <ul>
      {Object.entries(tasks).map(
        ([id, { title, children }]) => {
          const isParent = Object.keys(children).length;
          const name = (isParent) ? '세부' : '완료';

          const handleItemClick = () => dispatch(updateCurrentTaskId(id));
          const handleButtonClick = (isParent)
            ? () => null
            : () => dispatch(deleteTask(id));

          // Todo 세부버튼

          return (
            <li key={id}>

              <h3 onClick={handleItemClick}>
                {title}
              </h3>

              <button type="button" onClick={handleButtonClick}>
                {name}
              </button>

            </li>
          );
        },
      )}
    </ul>
  );
}
