import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  OutlinedInput,
  InputLabel,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  Paper,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogActions,
  Slide,
  Snackbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#b9114b",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const listaHabilidades = [
  "React",
  "Ract Native",
  "Vue",
  "Java",
  "Angular",
  "Nenhuma habilidade",
];

const listaPreferencias = ["Front-end", "Back-end"];

const TransitionDelete = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const TransitionAdicionar = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {
  const [funcionarios, setFuncionarios] = useState([
    {
      nome: "Fiora",
      funcao: "Desenvolvedora",
      habilidades: ["Vue", "React"],
      preferencias: "Back-end",
    },
    {
      nome: "Rakan",
      funcao: "Analista",
      habilidades: ["Ract Native", "React", "Java"],
      preferencias: "Front-end",
    },
    {
      nome: "Camille",
      funcao: "Trainee",
      habilidades: ["Angular", "Java"],
      preferencias: "Front-end",
    },
    {
      nome: "Lucian",
      funcao: "Desenvolvedor",
      habilidades: ["Java", "Angular"],
      preferencias: "Back-end",
    },
    {
      nome: "Jax",
      funcao: "Tester",
      habilidades: ["Vue", "Angular"],
      preferencias: "Front-end",
    },
    {
      nome: "Aurelion",
      funcao: "Senior",
      habilidades: ["Angular", "Vue"],
      preferencias: "Back-end",
    },
    {
      nome: "Alistar",
      funcao: "Gerente de projetos",
      habilidades: ["React Native", "React"],
      preferencias: "Front-end",
    },
    {
      nome: "Janna",
      funcao: "Analista",
      habilidades: ["Nenhuma Habilidade"],
      preferencias: "Back-end",
    },
  ]);

  const funcionariosOriginais = [funcionarios];

  const [inputNome, setInputNome] = useState("");

  const [inputFuncao, setInputFuncao] = useState("");

  const [inputHabilidades, setInputHabilidades] = useState([]);

  const [inputPreferencias, setInputPreferencias] = useState("");

  const [inputPesquisa, setInputPesquisa] = useState("");

  const [indexEditado, setIndexEditado] = useState();

  const [indexDeletado, setIndiceDeletado] = useState();

  const [funcionarioDeletado, setFuncionarioDeletado] = useState("");

  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const [openAdicionar, setOpenAdicionar] = useState(false);

  const [botaoEditarAdicionar, setBotaoEditarAdicionar] = useState(false);

  const [botaoOrdenar, setBotaoOrdenar] = useState(true);

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const closeSnackBarDeletar = () => {
    setState({ ...state, open: false });
  };

  function abrirAdicionar() {
    setBotaoEditarAdicionar(true);
    setOpenAdicionar(!openAdicionar);
    setInputNome("");
    setInputFuncao("");
    setInputHabilidades([]);
  }

  function fecharAdicionar() {
    setOpenAdicionar(!openAdicionar);
  }

  function adicionarSim() {
    if (
      inputNome === "" ||
      inputFuncao === "" ||
      inputHabilidades.length === 0 ||
      inputPreferencias === ""
    ) {
      setState({ ...state, open: true });
    } else {
      const novoFuncionario = {
        nome: inputNome,
        funcao: inputFuncao,
        habilidades: inputHabilidades,
        preferencias: inputPreferencias,
      };
      setFuncionarios([...funcionarios, novoFuncionario]);
      setInputNome("");
      setInputFuncao("");
      setInputHabilidades([]);
      setInputPreferencias("");
      setOpenAdicionar(!openAdicionar);
    }
  }

  function deletar(index, funcionario) {
    setIndiceDeletado(index);
    setFuncionarioDeletado(funcionario);
    setOpenDialogDelete(!openDialogDelete);
  }

  function deletarSim() {
    const funcionariosAux = [...funcionarios];
    funcionariosAux.splice(indexDeletado, 1);
    setFuncionarios(funcionariosAux);
    setOpenDialogDelete(!openDialogDelete);
  }

  function fecharDialogoDelete() {
    setOpenDialogDelete(!openDialogDelete);
  }

  function editar(index, nome, funcao, habilidades, preferencias) {
    setBotaoEditarAdicionar(false);
    setOpenAdicionar(!openAdicionar);
    setInputNome(nome);
    setInputFuncao(funcao);
    setInputHabilidades(habilidades);
    setInputPreferencias([preferencias]);
    setIndexEditado(index);
  }

  function editarSim() {
    if (
      inputNome === "" ||
      inputFuncao === "" ||
      inputHabilidades.length === 0 ||
      inputPreferencias === ""
    ) {
      setState({ ...state, open: true });
    } else {
      const funcionariosAux = [...funcionarios];
      funcionariosAux[indexEditado] = {
        nome: inputNome,
        funcao: inputFuncao,
        habilidades: [...inputHabilidades],
        preferencias: inputPreferencias,
      };
      setFuncionarios(funcionariosAux);
      setOpenAdicionar(!openAdicionar);
    }
  }

  function ordenarCrescente(id) {
    console.log(id);
    const nomesOrdenados = [...funcionarios];
    const funcoesOrdenadas = [...funcionarios];
    const habilidadesOrdenadas = [...funcionarios];
    const preferenciasOrdenadas = [...funcionarios];
    switch (id) {
      case 1:
        if (botaoOrdenar) {
          nomesOrdenados.sort((a, b) => {
            if (a.nome < b.nome) {
              return -1;
            }
            if (a.nome > b.nome) {
              return 1;
            }
            return 0;
          });
        } else {
          nomesOrdenados.sort((a, b) => {
            if (a.nome < b.nome) {
              return 1;
            }
            if (a.nome > b.nome) {
              return -1;
            }
            return 0;
          });
        }
        setFuncionarios(nomesOrdenados);
        break;
      case 2:
        if (botaoOrdenar) {
          funcoesOrdenadas.sort((a, b) => {
            if (a.funcao < b.funcao) {
              return -1;
            }
            if (a.funcao > b.funcao) {
              return 1;
            }
            return 0;
          });
        } else {
          funcoesOrdenadas.sort((a, b) => {
            if (a.funcao < b.funcao) {
              return 1;
            }
            if (a.funcao > b.funcao) {
              return -1;
            }
            return 0;
          });
        }
        setFuncionarios(funcoesOrdenadas);
        console.log(id);
        break;
      case 3:
        if (botaoOrdenar) {
          habilidadesOrdenadas.sort((a, b) => {
            if (a.habilidades < b.habilidades) {
              return -1;
            }
            if (a.habilidades > b.habilidades) {
              return 1;
            }
            return 0;
          });
        } else {
          habilidadesOrdenadas.sort((a, b) => {
            if (a.habilidades < b.habilidades) {
              return 1;
            }
            if (a.habilidades > b.habilidades) {
              return -1;
            }
            return 0;
          });
        }
        setFuncionarios(habilidadesOrdenadas);
        console.log(id);
        break;
      case 4:
        if (botaoOrdenar) {
          preferenciasOrdenadas.sort((a, b) => {
            if (a.preferencias < b.preferencias) {
              return -1;
            }
            if (a.preferencias > b.preferencias) {
              return 1;
            }
            return 0;
          });
        } else {
          preferenciasOrdenadas.sort((a, b) => {
            if (a.preferencias < b.preferencias) {
              return 1;
            }
            if (a.preferencias > b.preferencias) {
              return -1;
            }
            return 0;
          });
        }
        setFuncionarios(preferenciasOrdenadas);
        console.log(id);
        break;
    }
    setBotaoOrdenar(!botaoOrdenar);
  }

  function pesquisar() {
    if (inputPesquisa !== 0) {
      const funcionariosAux = [...funcionarios];
      for (let i = funcionarios.length - 1; i >= 0; i--) {
        if (
          !funcionarios[i].nome
            .toLocaleLowerCase()
            .includes(inputPesquisa.toLocaleLowerCase())
        ) {
          funcionariosAux.splice(i, 1);
        }
      }
      console.log(funcionariosOriginais);
      setFuncionarios(funcionariosAux);
    } else {
      setFuncionarios(funcionariosOriginais);
    }
    console.log(funcionariosOriginais);
  }

  return (
    <div className="listaDeFuncionarios">
      <ThemeProvider theme={theme}>
        <h1 className="tituloPrincipal">Lista de Funcionários</h1>

        {/* div Botão/input de pesquisa/botão cadastrar*/}

        <div className="pesquisarCadastrar">
          <TextField
            size="small"
            value={inputPesquisa}
            onChange={(e) => setInputPesquisa(e.target.value)}
            type="text"
            label="Nome"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                pesquisar();
              }
            }}
          />
          <Button
            size="medium"
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={pesquisar}
          >
            Pesquisar
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            style={{
              textAlign: "center",
              justifyContent: "center",
              position: "absolute",
              right: "30px",
            }}
            onClick={abrirAdicionar}
          >
            Cadastrar usuário
          </Button>
        </div>

        {/* Tabela */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Nome do Funcionário (a)
                  <Button
                    className="botaoFiltro"
                    id={1}
                    startIcon={<UnfoldMoreIcon style={{ marginLeft: 9 }} />}
                    size="small"
                    color="inherit"
                    onClick={() => ordenarCrescente(1)}
                  ></Button>
                </TableCell>
                <TableCell align="left">
                  Função
                  <Button
                    className="botaoFiltro"
                    startIcon={<UnfoldMoreIcon style={{ marginLeft: 9 }} />}
                    size="small"
                    color="inherit"
                    onClick={() => ordenarCrescente(2)}
                  ></Button>
                </TableCell>
                <TableCell align="left">
                  Habilidades
                  <Button
                    className="botaoFiltro"
                    startIcon={<UnfoldMoreIcon style={{ marginLeft: 9 }} />}
                    size="small"
                    color="inherit"
                    onClick={() => ordenarCrescente(3)}
                  ></Button>
                </TableCell>
                <TableCell align="left">
                  Preferências
                  <Button
                    className="botaoFiltro"
                    startIcon={<UnfoldMoreIcon style={{ marginLeft: 9 }} />}
                    size="small"
                    color="inherit"
                    onClick={() => ordenarCrescente(4)}
                  ></Button>
                </TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {funcionarios.map((funcionario, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffc9e4" : "white",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {funcionario.nome}
                  </TableCell>
                  <TableCell align="left">{funcionario.funcao}</TableCell>
                  <TableCell align="left">
                    {funcionario.habilidades.join(", ")}
                  </TableCell>
                  <TableCell align="left">{funcionario.preferencias}</TableCell>
                  <TableCell align="right">
                    {/* Botão de edit */}

                    <Tooltip title="Editar">
                      <Button
                        variant="text"
                        startIcon={<EditIcon style={{ marginLeft: 9 }} />}
                        size="small"
                        onClick={() =>
                          editar(
                            index,
                            funcionario.nome,
                            funcionario.funcao,
                            funcionario.habilidades,
                            funcionario.preferencias
                          )
                        }
                      ></Button>
                    </Tooltip>

                    {/* Botão de delete */}

                    <Tooltip title="Deletar">
                      <Button
                        variant="text"
                        startIcon={<DeleteIcon style={{ marginLeft: 9 }} />}
                        size="small"
                        onClick={() => deletar(index, funcionario.nome)}
                      ></Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <br />

        <span>Exibindo 8 de {funcionarios.length}</span>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            textAlign: "center",
          }}
        >
          <Button variant="contained">{"<<"}</Button>
          <Button variant="contained">{"<"}</Button>
          <Button variant="contained">{">"}</Button>
          <Button variant="contained">{">>"}</Button>
        </div>

        {/* Diálogo Adicionar/ Editar e inputs*/}

        <Dialog
          open={openAdicionar}
          TransitionComponent={TransitionAdicionar}
          keepMounted
          onClose={fecharAdicionar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xl"
          PaperProps={{
            style: {
              maxHeight: "80vh",
              minHeight: "60vh",
              minWidth: "50vh",
              height: "25%",
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">
            <span
              style={{ display: "flex", justifyContent: "center" }}
            >{`Digite os dados do funcionário: `}</span>
          </DialogTitle>
          <DialogActions
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* div inputs  */}

            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* input nome */}

              <TextField
                id="outlined-basic"
                type="text"
                label="Nome"
                variant="outlined"
                size="large"
                value={inputNome}
                margin="dense"
                onChange={(e) => setInputNome(e.target.value)}
                style={{ marginRight: 15, marginLeft: 10, width: 300 }}
              ></TextField>

              {/* input função/select */}

              <TextField
                id="outlined-basic"
                type="text"
                label="Função"
                variant="outlined"
                size="large"
                value={inputFuncao}
                margin="dense"
                onChange={(e) => setInputFuncao(e.target.value)}
                style={{ marginRight: 15, marginLeft: 10, width: 300 }}
              ></TextField>

              {/* input/formulário/select habilidades */}

              <FormControl sx={{ width: 300 }}>
                <InputLabel
                  id="demo-multiple-checkbox-label"
                  style={{ marginLeft: 10, marginTop: 10 }}
                >
                  Habilidades
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  type="text"
                  id="demo-multiple-checkbox"
                  variant="outlined"
                  label="Habilidades"
                  multiple
                  value={inputHabilidades}
                  onChange={(e) => setInputHabilidades(e.target.value)}
                  input={<OutlinedInput label="Habilidades" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  style={{
                    marginLeft: 10,
                    marginRight: 15,
                    marginTop: 9,
                    width: 300,
                  }}
                >
                  {listaHabilidades.map((name, index) => (
                    <MenuItem key={index} value={name}>
                      <Checkbox checked={inputHabilidades.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* input preferencias */}

              <FormControl sx={{ width: 300 }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginLeft: 10, marginTop: 12 }}
                >
                  Preferências
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  labelId="demo-simple-select-label"
                  type="text"
                  label="Preferências"
                  variant="outlined"
                  value={inputPreferencias}
                  margin="dense"
                  onChange={(e) => setInputPreferencias(e.target.value)}
                  style={{
                    marginTop: 12,
                    width: 300,
                    marginLeft: 10,
                  }}
                >
                  {listaPreferencias.map((preferencia, index) => (
                    <MenuItem key={index} value={preferencia}>
                      {preferencia}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <br />
            <br />
            <br />

            {/* Botão confirmação com operador ternário (true para adicionar e false para editar*/}

            {botaoEditarAdicionar ? (
              <Button variant="contained" onClick={adicionarSim}>
                Adicionar
              </Button>
            ) : (
              <Button variant="contained" onClick={editarSim}>
                Salvar
              </Button>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                marginTop: 40,
              }}
            ></div>
          </DialogActions>
        </Dialog>

        {/* Div e Snackbar de dados inválidos*/}

        <div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={5000}
            onClose={closeSnackBarDeletar}
            message="Dados inválidos"
            key={vertical + horizontal}
          />
        </div>

        {/* Diálogo Deletar */}

        <Dialog
          open={openDialogDelete}
          TransitionComponent={TransitionDelete}
          keepMounted
          onClose={fecharDialogoDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Deseja deletar o usuário ${funcionarioDeletado}?`}
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenDialogDelete(!openDialogDelete);
              }}
            >
              Não
            </Button>
            <Button onClick={deletarSim} autoFocus>
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default Home;
