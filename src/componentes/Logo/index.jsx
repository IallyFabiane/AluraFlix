import styled from 'styled-components';

const LogoImage = styled.img`
    width: 105px;
    height: 25px;
`;

function Logo() {
    return (
        <LogoImage src="/img/logo.svg" alt="Logotipo" />
    )
}

export default Logo;