import styled from 'styled-components';
import VideoCard from '../VideoCard';
import ButtonAction from '../ButtonAction';
import { variaveis } from '../UI/variaveis';

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding-bottom: 10px;
    background-color: ${variaveis.corGrayDark};

    @media (min-width: 993px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

`;

const H2 =styled.h2`
    color:  ${variaveis.corWhite};
    line-height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
`;

const Categoria = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 993px) {
      flex-direction: row;
      margin: 0 350px;
    }
`;

const Video = styled.div`
    width: 340px;
    margin: 0 auto;

    &:hover {
      transform: scale(1.05);
    }
  
    @media (min-width: 768px) and (max-width: 992px) {
      width: 748px;
    }

`;

function SectionCategories({ categories }) {

    return (
      <>
        {Object.keys(categories).map((category, index) => (
          <Section key={index}>
            <Categoria>
                <ButtonAction to="/" backgroundColor={variaveis[`cor${category.replace(/-/g, '')}`]} color={variaveis.corWhite}>
                    {category.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())}
                </ButtonAction>
                <H2>{`Formação em ${category.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())} da Alura`}</H2>
            </Categoria>
            {categories[category].map((video, index) => (
              <Video key={index}>
                <VideoCard src={video.thumb} to={video.url}/>
              </Video>
            ))}
          </Section>
        ))}
      </>
    );
  }
  
  export default SectionCategories;
  