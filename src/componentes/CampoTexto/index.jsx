import { variaveis } from "../UI/variaveis";
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import './campoTexto.css';

const style = {
  borderRadius: 4,
  backgroundColor: variaveis.corInput,
  marginTop: 20,
  marginBottom: 20,
};


function CampoTexto ({placeholder, type, onChange, value }) {

    const [larguraTela, setLarguraTela] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setLarguraTela(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <TextField value={value} onChange={onChange} multiline required type={type} id="filled-basic" label={placeholder} variant="filled" style={ style } className={larguraTela > 993 ? 'largura-1360' : 'largura'}  InputProps={{ style: { color: variaveis.corWhite } }} />
    )
}

export default CampoTexto;
