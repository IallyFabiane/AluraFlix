import Header from './componentes/Header';
import styled from 'styled-components';
import { GlobalStyle } from './componentes/GlobalStyle';

const Home = styled.body`
  background-color: #000;
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
