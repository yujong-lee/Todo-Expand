import List from './List';

export default function App() {
  return (
    <>
      <h1>
        todo-expand
      </h1>
      <label htmlFor="todoinput">
        할 일
      </label>
      <input id="todoinput" type="text" />

      <List todos={[
        {
          id: 1,
          title: '아무 것도 하지 말자',
          children: [
            { id: 3, title: '그냥 누워있자', children: [] },
          ],
        },
        { id: 2, title: '애자일 공부', children: [] },
      ]}
      />
    </>
  );
}
