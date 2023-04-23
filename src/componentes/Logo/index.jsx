import styled from 'styled-components';

const LogoImage = styled.img`
    width: 105px;
    height: 25px;
    margin-left: 32px;
`;

function Logo() {
    return (
        <LogoImage src="/img/logo.svg" alt="Logotipo" />
    )
}

export default Logo;