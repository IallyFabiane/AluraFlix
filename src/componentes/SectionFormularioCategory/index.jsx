import styled from "styled-components";
import { variaveis } from "../UI/variaveis";
import CampoTexto from "../CampoTexto";
import { FormControl, Button, InputLabel, Select, MenuItem, TableHead, TableRow, TableCell, TableBody, TableContainer, Table, Paper } from "@mui/material";
import { useState, useEffect } from "react";

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;

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

const P = styled.p`
  color: ${variaveis.corGrayLighter};
  font-weight: bold;
  font-size: 20px;
  margin: 30px 0;
  text-align: left;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    margin: 20px 0;

    @media (min-width: 993px) {
        flex-direction: row;
    }
`;

const Span =styled.span`
  color: ${variaveis.corErroDark};
`;

function createData(
    nome,
    descricao,
    editar,
    remover,
  ) {
    return { nome, descricao, editar, remover };
}
  
const rows = [
    createData('Front-end', 'Todos os vídeos que estou usando para estudar Front-end', 'editar', 'remover' ),
    createData('Back-end', 'Todos os vídeos que estou usando para estudar Back-end', 'editar', 'remover'),
    createData('Infraestrutura', 'Todos os vídeos que estou usando para estudar Infraestrutura', 'editar', 'remover'),
    createData('Inovação', 'Todos os vídeos que estou usando para estudar Inovação', 'editar', 'remover'),
    createData('Data-Science', 'Todos os vídeos que estou usando para estudar Dados', 'editar', 'remover'),
    createData('Marketing', 'Todos os vídeos que estou usando para estudar Marketing', 'editar', 'remover'),
    createData('Design & UX', 'Todos os vídeos que estou usando para estudar Design & UX', 'editar', 'remover'),
];

function SectionFormularioCategory ({ titulo, variaveis }) {

    const [category, setCategory] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [descricao, setDescricao] = useState('');
    const [codigoSeguranca, setCodigoSeguranca] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [selectedValueError, setSelectedValueError] = useState('');
    const [codigoSegurancaError, setCodigoSegurancaError] = useState('');
    const [categories, setCategories] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [existingCategories, setExistingCategories] = useState([]);

    useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = () => {
      fetch("http://localhost:3001/categories")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Erro ao obter a lista de categorias");
          }
        })
        .then((data) => {
          setCategories(data);
          setExistingCategories(data.categories);
          setDataList(formatDataList(data));
        })
        .catch((error) => {
          console.error("Erro ao obter a lista de categorias:", error);
        });
    };
  
    const formatDataList = (categories) => {
      const dataList = [];
  
      for (const category in categories) {
        const categoryData = categories[category];
  
        for (const data of categoryData) {
          dataList.push({
            nome: category,
            descricao: data.title,
            editar: data.url,
            remover: data.thumb,
          });
        }
      }
  
      return dataList;
    };
  
  
    const handleCategoryChange = (event) => {
      if (event.target.value.trim() !== '') {
        setCategory(event.target.value);
      } else {
        setCategoryError('O campo não pode ser vazio');
      }
    };
    
    const handleDescricaoChange = (event) => {
      setDescricao(event.target.value);
    };
    
    const handleCodigoSegurancaChange = (event) => {
      if (event.target.value.trim() !== '') {
        setCodigoSeguranca(event.target.value);
      } else {
        setCodigoSegurancaError('O campo não pode ser vazio');
      }
    };
    
    const handleSelectChange = (event) => {
      if (event.target.value.trim() !== '') {
        setSelectedValue(event.target.value);
      } else {
        setSelectedValueError('O campo não pode ser vazio');
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    
      let categoryError = '';
      let selectedValueError = '';
      let codigoSegurancaError = '';
    
      if (category.trim() === '') {
        categoryError = 'O campo não pode ser vazio';
      }
    
      if (selectedValue.trim() === '') {
        selectedValueError = 'O campo não pode ser vazio';
      }
    
      if (codigoSeguranca.trim() === '') {
        codigoSegurancaError = 'O campo não pode ser vazio';
      }
    
      setCategoryError(categoryError);
      setSelectedValueError(selectedValueError);
      setCodigoSegurancaError(codigoSegurancaError);
    
      if (categoryError === '' && selectedValueError === '' && codigoSegurancaError === '') {
        const newCategory = {
          [category]: [
            {
              title: "",
              url: "",
              thumb: "",
            },
          ],
        };
    
        fetch("http://localhost:3001/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCategory),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Erro ao criar nova categoria");
            }
          })
          .then((data) => {
            console.log("Nova categoria criada:", data);
            const updatedCategories = {
              ...categories,
              ...newCategory,
            };
    
            fetch("http://localhost:3001/categories", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedCategories),
            })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Erro ao atualizar categorias");
                }
              })
              .then((data) => {
                console.log("Categorias atualizadas:", data);
                setCategories(data);
                setDataList(formatDataList(data));
              })
              .catch((error) => {
                console.error("Erro ao atualizar categorias:", error);
              });
    
            fetchCategories(); // Atualiza a lista de categorias após criar uma nova
          })
          .catch((error) => {
            console.error("Erro ao criar nova categoria:", error);
          });
    
        console.log('Valor do Categoria:', category);
        console.log('Valor selecionado:', selectedValue);
        console.log('Valor da Descrição:', descricao);
        console.log('Valor do Código de Segurança:', codigoSeguranca);
    
        setFormSubmitted(true);
      }
    };    

    const categoriaCores = {
        FrontEnd: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corFrontEnd,
        },
        BackEnd: {
          color: variaveis.corGrayDark,
          backgroundColor: variaveis.corBackEnd,
        },
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
        <>
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <Legend>{titulo}</Legend>
              <CampoTexto placeholder="Categoria"
              type="text" 
              value={category}
              onChange={handleCategoryChange} 
              error={categoryError !== ''}
              helperText={categoryError}
              required
              />
              {categoryError && <Span>{categoryError}</Span>}
              <FormControl
                variant="filled"
                sx={{ backgroundColor: variaveis.corInput, borderRadius: 1, marginTop: 2, marginBottom: 2 }}
              >
                <InputLabel id="demo-simple-select-filled-label">Selecione uma opção</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-select"
                  value={selectedValue}
                  onChange={handleSelectChange}
                  error={selectedValueError !== ''}
                  helperText={selectedValueError}
                  required
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
              {selectedValueError && <Span>{selectedValueError}</Span>}
              <CampoTexto
              placeholder="Descrição"
              type="text" value={descricao}
              onChange={handleDescricaoChange}
              />
              <CampoTexto
              placeholder="Código de Segurança"
              type="number"
              value={codigoSeguranca}
              onChange={handleCodigoSegurancaChange}
              required
              error={codigoSegurancaError !== ''}
              helperText={codigoSegurancaError}
              />
              {codigoSegurancaError && <Span>{codigoSegurancaError}</Span>}
              <ButtonContainer>
                <Button variant="contained" onClick={handleSubmit}>Salvar</Button>
                <Button variant="outlined">Deletar</Button>
              </ButtonContainer>
              {formSubmitted && <P>Formulário enviado com sucesso!</P>}
            </FormControl>
          </Form>
        <TableContainer component={Paper} sx={{ minWidth: 270, maxWidth: 900, marginLeft: 6,'@media (max-width: 993px)': {
            display: 'none',
          },}}>
        <Table sx={{ minWidth: 270, maxWidth: 900, backgroundColor: variaveis.corGrayLighter }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Editar</TableCell>
              <TableCell align="right">Remover</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
                <TableCell align="right">{row.editar}</TableCell>
                <TableCell align="right">{row.remover}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
      );
    };
    
export default SectionFormularioCategory;