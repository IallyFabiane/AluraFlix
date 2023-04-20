import Logo from "../Logo";
import styled from "styled-components";

const Cabecalho = styled.header`
    min-width: 320px;
    max-width: 993px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Header() {
    return (
        <Cabecalho>
            <Logo />
        </Cabecalho>
    )
}

export default Header;