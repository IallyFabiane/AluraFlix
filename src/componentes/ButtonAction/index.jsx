import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { variaveis } from '../UI/variaveis';

const Button = styled.button`
  width: 120px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  border-radius: 2px;
`;

function ButtonAction({ backgroundColor ,color, children, to }) {
    return (
        <Button backgroundColor={backgroundColor} color={color}><Link style={ { textDecoration: 'none', color: color}} to={to}>{children}</Link></Button>
    )
}

export default ButtonAction;