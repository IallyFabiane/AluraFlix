import styled from "styled-components";
import { variaveis } from "../UI/variaveis";
import CampoTexto from "../CampoTexto";
import { FormControl, Button, InputLabel, Select, MenuItem  } from "@mui/material";
import { useState } from "react";

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;

    @media (min-width: 993px) {
        height: 600px;
    }
`;

const Legend = styled.legend`
    color: ${variaveis.corWhite};
    text-align: center;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    padding-bottom: 30px;
    
    @media (min-width: 993px) {
        font-size: 60px;
        line-height: 70px;
    }
`;

const P = styled.p`
  color: ${variaveis.corGrayLighter};
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;

    @media (min-width: 993px) {
        flex-direction: row;
    }
`;

const Span =styled.span`
    color: ${variaveis.corErroDark};
`;


function SectionFormularioCategory ({ titulo, variaveis }) {

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const categoriaCores = {
        Inovação: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corInovation,
        },
        Marketing: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corMarketing,
        },
        Mobile: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corMobile,
        },
        Infraestrutura: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corInfra,
        },
        DataScience: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corDataScience,
        },
        UX: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corUX,
        },
      };
    
      const getCategoriaStyles = (categoria) => categoriaCores[categoria] || {};
    
      return (
        <Form>
          <FormControl>
            <Legend>{titulo}</Legend>
            <CampoTexto placeholder="Título" type="text" required />
            <FormControl
              variant="filled"
              sx={{ backgroundColor: variaveis.corInput, borderRadius: 1 }}
            >
              <InputLabel id="demo-simple-select-filled-label">Selecione uma opção</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-select"
                value={selectedValue}
                onChange={handleSelectChange}
                sx={{ backgroundColor: variaveis.corInput, borderRadius: 1 }}
              >
                {Object.keys(categoriaCores).map((categoria) => (
                  <MenuItem
                    key={categoria}
                    value={categoria}
                    style={getCategoriaStyles(categoria)}
                  >
                    {categoria}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <CampoTexto placeholder="Descrição" type="text" />
            <CampoTexto placeholder="Código de Segurança" type="number" required />
            <ButtonContainer>
              <Button variant="contained">Salvar</Button>
              <Button variant="outlined">Deletar</Button>
            </ButtonContainer>
          </FormControl>
        </Form>
      );
    };
    
export default SectionFormularioCategory;