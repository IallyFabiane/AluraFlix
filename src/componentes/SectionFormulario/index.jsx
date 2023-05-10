import styled from "styled-components";
import { variaveis } from "../UI/variaveis";
import { FormControl, Button } from "@mui/material";
import CampoTexto from "../CampoTexto";
import ButtonAction from "../ButtonAction";
import { useState } from "react";

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

    const [title, setTitle] = useState("");
    const [video, setVideo] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [security, setSecurity] = useState("");

    return (
        <Section>
            <FormControl onSubmit={event => {
                event.preventDefault();
            }}>
                <Legend>{titulo}</Legend>
                <CampoTexto  onChange={event => {
                    setTitle(event.target.value)
                }} 
                placeholder="Título" 
                type="text"
                value={title}
                 />
                <CampoTexto  onChange={event => {
                    setVideo(event.target.value)
                }} 
                placeholder="Link do Vídeo" 
                type="url"
                value={video}
                />
                <CampoTexto  onChange={event => {
                    setImage(event.target.value)
                }} 
                placeholder="Link da imagem do Vídeo"
                type="url"
                value={image}
                 />
                <CampoTexto onChange={event => {
                    setDescription(event.target.value)
                }} 
                placeholder="Descrição"
                type="text"
                value={description}
                />
                <CampoTexto onChange={event => {
                    setCategory(event.target.value)
                }}
                placeholder="Escolha uma categoria"
                type="text" 
                value={category}
                />
                <CampoTexto onChange={event => {
                    setSecurity(event.target.value)
                }}
                placeholder="Código de Segurança"
                type="text"
                value={security}
                />
                <ButtonContainer>
                    <Button onClick={ () => { console.log(title, video, image, description, category, security) }} variant="contained">Salvar</Button>
                    <Button variant="outlined">Limpar</Button>
                    <ButtonAction backgroundColor={variaveis.corPrimaria} color={variaveis.corWhite} to='/novacategoria'>NOVA CATEGORIA</ButtonAction>
                </ButtonContainer>
            </FormControl>
        </Section>
    )
}

export default SectionFormulario;