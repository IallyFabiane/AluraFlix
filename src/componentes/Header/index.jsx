import ButtonAction from "../ButtonAction";
import Logo from "../Logo";
import { variaveis } from '../UI/variaveis';
import styled from "styled-components";

const Cabecalho = styled.header`
    min-width: 320px;
    max-width: 993px;
    margin: 0;
    padding: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 994px) {
        min-width: 1131px;
        max-width: 1444px;
        height: 94px;
        justify-content: space-between;
    }
`;

function Header() {
    return (
        <Cabecalho>
            <Logo />
            <ButtonAction color={variaveis.corWhite} backgroundColor={variaveis.corGrayDark} >Novo Vídeo</ButtonAction>
        </Cabecalho>
    )
}

export default Header;