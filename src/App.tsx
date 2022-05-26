import { Container, ContentMap, Header } from './App.style'
import { LeafletMap } from "./components/LeafletMap/LeafletMap";

function App() {
  return (
    <Container>
      <Header>
        
      </Header>
      <ContentMap>
        <LeafletMap />
      </ContentMap>
    </Container>    
  );
}

export default App;
