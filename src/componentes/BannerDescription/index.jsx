import styled from "styled-components";
import { variaveis } from "../UI/variaveis";

const P = styled.p`

    display: none;

    @media (min-width: 993px) {
        display: block;
        position: absolute;
        width: 400px;
        height: 110px;
        left: 100px;
        top: 301px;
        color: ${variaveis.corWhite};
        line-height: 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        text-align: justify;
    }
   
`;

function BannerDescription () {
    return (
        <P>
            Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar
            na resolução de um problema para poder aplicar todo o conhecimento adquirido na 
            Formação React.
        </P>
    )
}

export default BannerDescription;