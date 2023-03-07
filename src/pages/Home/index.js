import React, { useState, useEffect } from "react";
import "./home.css";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  Slide,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicTable from "../../components/BasicTable";
import SnackBarDadosInvalidos from "../../components/SnackBarDadosInvalidos.js";
import DeleteDialog from "../../components/DeleteDialog";
import InputNome from "../../components/InputNome";
import InputFuncao from "../../components/InputFuncao";
import FormularioHabilidades from "../../components/FormularioHabilidades";
import FormularioPreferencias from "../../components/FormularioPreferencias";

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
  const [funcionariosOriginais, setFuncionariosOriginais] = useState();

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

  useEffect(() => {
    setFuncionariosOriginais(funcionarios);
  }, []);

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
    const funcionariosAuxPesquisa = [];
    const funcionariosAuxDelete = [];
    funcionarios.forEach((funcionario) => {
      if (
        funcionario.nome
          .toLocaleLowerCase()
          .includes(inputPesquisa.toLocaleLowerCase())
      ) {
        funcionariosAuxPesquisa.push(funcionario);
      } else {
        funcionariosAuxDelete.push(funcionario);
      }
    });
    setFuncionarios(funcionariosAuxPesquisa);
    if (inputPesquisa === "") {
      setFuncionarios(funcionariosOriginais);
    }
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

        <br />
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
              <InputNome
                inputNome={inputNome}
                setInputNome={setInputNome}
              ></InputNome>

              <InputFuncao
                inputFuncao={inputFuncao}
                setInputFuncao={setInputFuncao}
              ></InputFuncao>

              <FormularioHabilidades
                inputHabilidades={inputHabilidades}
                listaHabilidades={listaHabilidades}
                setInputHabilidades={setInputHabilidades}
              ></FormularioHabilidades>

              <FormularioPreferencias
                inputPreferencias={inputPreferencias}
                listaPreferencias={listaPreferencias}
                setInputPreferencias={setInputPreferencias}
              ></FormularioPreferencias>
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

        <BasicTable
          funcionarios={funcionarios}
          ordenarCrescente={ordenarCrescente}
          editar={editar}
          deletar={deletar}
        ></BasicTable>

        <SnackBarDadosInvalidos
          open={open}
          closeSnackBarDeletar={closeSnackBarDeletar}
          vertical={vertical}
          horizontal={horizontal}
        ></SnackBarDadosInvalidos>

        <DeleteDialog
          openDialogDelete={openDialogDelete}
          fecharDialogoDelete={fecharDialogoDelete}
          TransitionDelete={TransitionDelete}
          funcionarioDeletado={funcionarioDeletado}
          deletarSim={deletarSim}
          setOpenDialogDelete={setOpenDialogDelete}
        ></DeleteDialog>
      </ThemeProvider>
    </div>
  );
}

export default Home;
