import ButtonLoadMentions from 'components/smart/Button/LoadMentions';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MentionsContextProvider from 'components/context/mentions';
import ListMentions from 'components/smart/List/Mentions';

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
      <MentionsContextProvider>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          overflow="hidden"
        >
          <ButtonLoadMentions />
          <ListMentions component={Box} width="100%" />
        </Box>
      </MentionsContextProvider>
    </Container>
  );
}

export default App;
