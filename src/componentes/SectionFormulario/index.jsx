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

const Span =styled.span`
    color: ${variaveis.corErroDark};
`;

function SectionFormulario({ titulo }) {

    const [title, setTitle] = useState('');
    const [video, setVideo] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [security, setSecurity] = useState('');
    const [validationError, setValidationError] = useState('');
    const [videoError, setVideoError] = useState("");
    const [imageError, setImageError] = useState("");

    const handleTitleChange = (event) => {
      const value = event.target.value;
      setTitle(value);
      if (value.length < 3) {
        setValidationError('O campo título deve conter pelo menos 3 caracteres.');
      } else {
        setValidationError('');
      }
    };

    const handleVideoChange = (event) => {
        const value = event.target.value;
        setVideo(value);
        // Expressão regular para validar a URL do vídeo
        const urlRegexVideo = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        if (!urlRegexVideo.test(value)) {
            setVideoError("Link do vídeo inválido. (ex: https://www.youtube.com/watch?v=90NcVNsKGik)");
        } else {
            setVideoError("");
        }
    };

    const handleImageChange = (event) => {
        const value = event.target.value;
        setImage(value);
        // Expressão regular para validar a URL da imagem
        const urlRegexImg = /^(https?:\/\/)?[^\s/$.?#]+\.(jpg|jpeg|png|gif|bmp)$/i;
        if (!urlRegexImg.test(value)) {
            setImageError("URL da imagem inválida. (ex: https://img.youtube.com/vi/dvd3pNYh7So/hqdefault.jpg)");
        } else {
            setImageError("");
        }
    };
    const handleSubmit = (event) => {

        event.preventDefault();

        if (title.length < 3) {
            setValidationError('O campo título deve conter pelo menos 3 caracteres.');
            return;
        }

        if (videoError !== "") {
            return;
        }

        if (imageError !== "") {
            return;
        }

        console.log('form enviado');
    };

    const handleClick = () => {
        console.log(title, video, image, description, category, security);
    };

  
    return (
      <Section>
        <FormControl onSubmit={handleSubmit}>
          <Legend>{titulo}</Legend>
          <CampoTexto
            onChange={handleTitleChange}
            placeholder="Título"
            type="text"
            value={title}
            error={validationError !== ''}
            helperText={validationError}
            required
            />
          {validationError && <Span>{validationError}</Span>}
          <CampoTexto
            onChange={handleVideoChange}
            placeholder="Link do Vídeo"
            type="url"
            value={video}
            error={videoError !== ''}
            helperText={videoError}
            required
          />
         {videoError && <Span>{videoError}</Span>}
          <CampoTexto
            onChange={handleImageChange}
            placeholder="Link da imagem do Vídeo"
            type="url"
            value={image}
            error={imageError !== ''}
            helperText={imageError}
            required
          />
        {imageError && <Span>{imageError}</Span>}
          <CampoTexto
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Descrição"
            type="text"
            value={description}
          />
          <CampoTexto
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Escolha uma categoria"
            type="text"
            value={category}
            required
          />
          <CampoTexto
            onChange={(event) => setSecurity(event.target.value)}
            placeholder="Código de Segurança"
            type="number"
            value={security}
            required={true}
          />
          <ButtonContainer>
            <Button onClick={handleClick} variant="contained">
              Salvar
            </Button>
            <Button variant="outlined">Limpar</Button>
            <ButtonAction backgroundColor={variaveis.corPrimaria} color={variaveis.corWhite} to="/novacategoria">
              NOVA CATEGORIA
            </ButtonAction>
          </ButtonContainer>
        </FormControl>
      </Section>
    );
  }
  
  export default SectionFormulario;