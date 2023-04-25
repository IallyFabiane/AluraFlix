import Header from './componentes/Header';
import styled from 'styled-components';
import { GlobalStyle } from './componentes/GlobalStyle';
import { variaveis } from './componentes/UI/variaveis';
import Footer from './componentes/Footer';
import Logo from './componentes/Logo';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NovoVideo from './componentes/NovoVideo';
import SectionBanner from './componentes/SectionBanner';
import BannerImage from './componentes/BannerImage';
import BannerVideo from './componentes/BannerVideo';
import ButtonAction from './componentes/ButtonAction';
import BannerTitle from './componentes/BannerTitle';
import BannerDescription from './componentes/BannerDescription';
import SectionCategories from './componentes/SectionCategories';
import ScrollToTop from './componentes/ScrollToTop';

const Home = styled.main`
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

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error(error));
  }, []);


  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={
        <Home className="App">
          <Header>
          {larguraTela > 993 ? (
              <>
               <Logo />
               <ButtonAction color={variaveis.corWhite} backgroundColor={variaveis.corGrayDark} to="/novovideo">Novo Vídeo</ButtonAction>
              </>
            ) : (
              <Logo />
            )}
          </Header>
          <SectionBanner>
            {larguraTela < 993 ? (
              <>
                <BannerImage />
                <BannerTitle />
                <ButtonAction backgroundColor={variaveis.corWhite} color={variaveis.corGrayDark} to="https://youtu.be/Z-N5Fr9P-GU">Assistir</ButtonAction>
              </>
            ) : (
              <>
                <BannerTitle/>
                <BannerDescription />
                <BannerVideo />
              </>
            )}
          </SectionBanner>
          <SectionCategories categories={categories} />
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