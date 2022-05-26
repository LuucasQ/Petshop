import { Container, ContentMap, Header } from './App.style'
import { LeafletMap } from "./components/LeafletMap/LeafletMap";
import { GlobalStyle } from './globalStyle';
import Logo from './assets/images/paw.svg'
import ImagePetshop from './assets/images/imagePetshop.jpg'
import { useState } from 'react';

type Marker = {
  name: string
  location: string
  lat: number
  log: number
}

function App() {
  const districts = ['San Martin', 'Afogados', 'Boa Viagem']
  
  const [markers, setMarkers] = useState<Marker[]>()
  
  const handleValueInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === 'Enter'){
      if(e.currentTarget.value.toLowerCase().includes('San Martin'.toLowerCase())){
        setMarkers([{name: 'Petshop de San Martin', location: 'San Martin', lat:  -8.0659, log:  -34.9258}])
      }else if(e.currentTarget.value.toLowerCase().includes('Afogados'.toLowerCase())){
        setMarkers([{name: 'Petshop de Afogados', location: 'Afogados', lat:  -8.0699, log:  -34.9258}])
      }else if(e.currentTarget.value.toLowerCase().includes('Boa Viagem'.toLowerCase())){
        setMarkers([{name: 'Petshop de Boa Viagem', location: 'Boa Viagem', lat:  -8.0639, log:  -34.9258}])
      }
    }
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Paw" />
        <p>Encontre aqui o Petshop mais perto de você</p>
      </Header>
      <ContentMap>
        <div className="imagePetshop">
          <img src={ImagePetshop} alt="Petshop" />
        </div>
        <div>
          <p>Digite seu bairro</p>
          <input type="text" onKeyDown={(e) => handleValueInput(e)} />

          <h1>Bairros para pesquisa: {districts.map((district, index) => index < (districts.length - 1) ? `${district} - ` : district)}</h1>

          <div className='map'>
            <LeafletMap markers={markers} />
          </div>
        </div>
      </ContentMap>
      <GlobalStyle />
    </Container>    
  );
}

export default App;
