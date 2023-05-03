import styled from 'styled-components';
import VideoCard from '../VideoCard';
import ButtonAction from '../ButtonAction';
import { variaveis } from '../UI/variaveis';
import Carousel from 'react-elastic-carousel';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding-bottom: 10px;
  background-color: ${variaveis.corGrayDark};
  overflow-x: hidden;
  margin: 0;

`;

const H2 = styled.h2`
  color: ${variaveis.corWhite};
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
  margin-top: 30px;
  padding: 0;

  @media (min-width: 993px) {
    flex-direction: row;
    margin-right: 55%;
  }
`;

const Video = styled.div`
  width: 340px;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) and (max-width: 801px) {
    width: 300px;
  }
  
`;

function SectionCategories({ categories }) {
  const breakPoints = [
    { width: 320, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 993, itemsToShow: 3 },
  ];

  return (
    <>
      {Object.keys(categories).map((category, index) => (
        <Section key={index}>
          <Categoria>
            <ButtonAction
              to="/"
              backgroundColor={variaveis[`cor${category.replace(/-/g, '')}`]}
              color={variaveis.corWhite}
            >
              {category.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())}
            </ButtonAction>
            <H2>{`Formação em ${category.toLowerCase().replace(/\b\w/g, (match) =>
              match.toUpperCase(),
            )} da Alura`}</H2>
          </Categoria>
          <Carousel 
          breakPoints={breakPoints}
          pagination={false}
          isRTL={false}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          swipeable={true}
          emulateTouch={true}
          selectedItem={0}
          dynamicHeight={true}
          >
            {categories[category].map((video, index) => (
              <Video key={index}>
                <VideoCard src={video.thumb} to={video.url} />
              </Video>
            ))}
          </Carousel>
        </Section>
      ))}
    </>
  );
}

export default SectionCategories;
