import Header from './componentes/Header';
import styled from 'styled-components';
import { GlobalStyle } from './componentes/GlobalStyle';
import { variaveis } from './componentes/UI/variaveis';

const Home = styled.body`
  background-color: ${variaveis.corGrayDark};
`;

function App() {

  return (
    <>
      <GlobalStyle /> 
      <Home className="App">
        <Header />
      </Home>
    </>
  )
}

export default App;
