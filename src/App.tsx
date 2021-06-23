/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from '@emotion/styled';

import Input from './components/Input';
import Task from './components/Task';
import Header from './Header';
import RestoreTask from './RestoreTask';
import TreeCanvas from './canvas/TreeCanvas';

const Container = styled.div({
  width: '80%',
  margin: '0 auto',
});

export default function App(): JSX.Element {
  return (
    <>
      <Container>
        <Header />
        <Input />
        <RestoreTask />
        <br />
        <Task id={0} />
      </Container>

      <TreeCanvas />
    </>
  );
}
