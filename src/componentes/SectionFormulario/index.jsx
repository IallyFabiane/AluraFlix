import styled from "styled-components";
import { variaveis } from "../UI/variaveis";
import { FormControl, Button } from "@mui/material";
import CampoTexto from "../CampoTexto";
import ButtonAction from "../ButtonAction";

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 900px;

    @media (min-width: 993px) {
        height: 700px;
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

const ButtonContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;

    @media (min-width: 993px) {
        flex-direction: row;
    }
`;

function SectionFormulario ({titulo}) {
    return (
        <Section>
            <FormControl>
                <Legend>{titulo}</Legend>
                <CampoTexto placeholder="Título" type="text" />
                <CampoTexto placeholder="Link do Vídeo" type="url" />
                <CampoTexto placeholder="Link da mensagem do Vídeo" type="url" />
                <CampoTexto placeholder="Descrição" type="text" />
                <CampoTexto placeholder="Escolha uma categoria" type="text" />
                <CampoTexto placeholder="Código de Segurança" type="text" />
                <ButtonContainer>
                    <Button variant="contained">Salvar</Button>
                    <Button variant="outlined">Limpar</Button>
                    <ButtonAction backgroundColor={variaveis.corPrimaria} color={variaveis.corWhite} to='/novacategoria'>NOVA CATEGORIA</ButtonAction>
                </ButtonContainer>
            </FormControl>
        </Section>
    )
}

export default SectionFormulario;