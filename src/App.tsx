import Container from './components/shared/container/Container';
import Education from './components/widgets/education/Education';
import Info from './components/widgets/info/Info';
import Projects from './components/widgets/projects/Projects';
import Stack from './components/widgets/stack/Stack';
import Works from './components/widgets/works/Works';

function App() {
  return (
    <>
      {/* <Container title={'About me'}> */}
      <Info />
      {/* </Container> */}
      {/* <Container title={'My Skills'}> */}
      <Stack />
      {/* </Container> */}
      {/* <Container title={'Projects'}> */}
      {/* <Projects /> */}
      {/* </Container>  */}
      {/* <Container title={'Work Exprience'}>
        <Works />
      </Container> */}
      {/* <Container title={'Education'}>
        <Education />
      </Container> */}
    </>
  );
}

export default App;
