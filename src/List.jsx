export default function List({ tasks }) {
  return (
    <ul>
      {tasks.map(({ id, title, children }) => (

        <li key={id}>
          {title}

          <button type="button">
            {(children.length)
              ? '세부'
              : '완료'}
          </button>

        </li>

      ))}
    </ul>
  );
}
