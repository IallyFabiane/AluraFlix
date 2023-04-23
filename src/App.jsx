import Header from './componentes/Header';
import styled from 'styled-components';
import { GlobalStyle } from './componentes/GlobalStyle';
import { variaveis } from './componentes/UI/variaveis';
import Footer from './componentes/Footer';
import Logo from './componentes/Logo';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NovoVideo from './componentes/NovoVideo';

const Home = styled.div`
  background-color: ${variaveis.corGrayDark};
  height: 100vh;
`;

function App() {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setLarguraTela(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Home className="App">
          <Header />
          <Footer
            larguraTela={larguraTela}
            to={larguraTela < 993 ? '/novovideo' : '/'}
          >
            {larguraTela < 993 ? "Novo vídeo" : <Logo />}
          </Footer>
        </Home>
      } />
     <Route path="/novovideo" element={<NovoVideo />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
  
  );
}

export default App