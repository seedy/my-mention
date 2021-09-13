import ButtonLoadMentions from 'components/smart/Button/LoadMentions';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


// COMPONENTS
function App() {
  return (
    <Container
      component={Box}
      height="100vh"
      width="100vw"
      maxWidth="md"
      pt={2}
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
      >
        <ButtonLoadMentions />
      </Box>
    </Container>
  );
}

export default App;
