import styled from "styled-components";
import { variaveis } from "../UI/variaveis";
import { FormControl, Button } from "@mui/material";
import CampoTexto from "../CampoTexto";
import ButtonAction from "../ButtonAction";
import { useState } from "react";

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 950px;

    @media (min-width: 993px) {
        height: 750px;
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
    const [submitted, setSubmitted] = useState(false);

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
      const urlRegexImg = /^(https?:\/\/)?([^\s\/\?\.#]+\.?)+(\/[^\s]*)?$/i;
      if (!value.trim() || !urlRegexImg.test(value.trim())) {
        setImageError("URL da imagem inválida. (ex: https://img.youtube.com/vi/dvd3pNYh7So/hqdefault.jpg)");
      } else {
        setImageError("");
      }
    };
    
    const handleSubmit = (event) => {

        event.preventDefault();

        if (title.length < 3) {
          setValidationError('O campo título deve conter pelo menos 3 caracteres.');
          setSubmitted(false);
          return;
        }

        if (videoError !== "") {
          setSubmitted(false);
          return;
        }

        if (imageError !== "") {
          setSubmitted(false);
          return;
        }

        if (category.length === 0) {
          setSubmitted(false);
          return;
        }


        setSubmitted(true);

        console.log(title, video, image, description, category, security);
    };

   ;

  
    return (
      <Form onSubmit={handleSubmit}>
        <FormControl>
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
            <Button onClick={handleSubmit} variant="contained">
              Salvar
            </Button>
            <Button variant="outlined">Limpar</Button>
            <ButtonAction backgroundColor={variaveis.corPrimaria} color={variaveis.corWhite} to="/novacategoria">
              NOVA CATEGORIA
            </ButtonAction>
          </ButtonContainer>
          {submitted && <P>Formulário enviado com sucesso!</P>}
        </FormControl>
      </Form>
    );
  }
  
  export default SectionFormulario;