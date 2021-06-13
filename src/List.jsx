/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

export default function List({
  tasks, handleDetailButton, handleCompleteButton, handleItemClick,
}) {
  return (
    <ul>
      {Object.entries(tasks).map(
      // Todo: entries sort

        ([id, { title, children }]) => {
          const isParent = Object.keys(children).length;
          const name = (isParent) ? '세부' : '완료';

          const handleButtonClick = (isParent)
            ? handleDetailButton
            : handleCompleteButton;

          return (
            <li key={id}>

              <h3 onClick={() => handleItemClick(id)}>
                {title}
              </h3>

              <button
                type="button"
                onClick={() => handleButtonClick(id)}
              >
                {name}
              </button>

              {(children.length !== 0)
                ? (
                  <List
                    tasks={children}
                    handleItemClick={handleItemClick}
                    handleCompleteButton={handleCompleteButton}
                    handleDetailButton={handleDetailButton}
                  />
                )

                : <p />}

            </li>
          );
        },
      )}
    </ul>
  );
}
