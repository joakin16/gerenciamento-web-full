import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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

function Contato() {
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

  const [inputPesquisa, setInputPesquisa] = useState("");

  const [funcionarioPesquisa, setFuncionarioPesquisa] = useState(funcionarios);

  const [indexPesquisa, setIndexPesquisa] = useState([]);

  const [indexPesquisaDelete, setIndexPesquisaDelete] = useState([]);

  function pesquisar() {
    // let indexPesquisaAux = [...indexPesquisa];
    // let indexPesquisaDeleteAux = [...indexPesquisaDelete];
    // const funcionariosAux = [...funcionarios];
    // funcionarioPesquisa.forEach((funcionario, index) => {
    //   if (funcionario.nome.includes(inputPesquisa)) {
    //     indexPesquisaAux = [...indexPesquisaAux, index];
    //   } else {
    //     indexPesquisaDeleteAux = [...indexPesquisaDeleteAux, index];
    //   }
    // });
    funcionarioPesquisa.forEach((funcionario, index) => {
      if (funcionario.nome.includes(inputPesquisa)) {
        setIndexPesquisa([...indexPesquisa, index]);
      } else {
        setIndexPesquisaDelete([...indexPesquisaDelete, index]);
      }
    });
    // funcionariosAux.splice(indexPesquisaDeleteAux, 1);
    console.log(`Index que fica: ${indexPesquisa}`);
    console.log(`Index que deleta: ${indexPesquisaDelete}`);
    // console.log(`funcionariosAux ${funcionariosAux}`);
  }

  useEffect(() => {
    pesquisar();
  }, [inputPesquisa]);

  return (
    <div className="listaDeFuncionarios">
      <ThemeProvider theme={theme}>
        <h1 className="tituloPrincipal">Tabela Function</h1>

        {/* div Botão/input de pesquisa/botão cadastrar*/}

        <div className="pesquisarCadastrar">
          <TextField
            size="small"
            value={inputPesquisa}
            onChange={(e) => setInputPesquisa(e.target.value)}
            type="text"
            label="Nome"
          />
          <Button
            size="medium"
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={pesquisar}
          >
            Pesquisar
          </Button>
        </div>

        {/* Tabela */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome do Funcionário (a)</TableCell>
                <TableCell align="left">Função</TableCell>
                <TableCell align="left">Habilidades</TableCell>
                <TableCell align="left">Preferências</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {funcionarios.length === 0 ? (
                <TableRow></TableRow>
              ) : (
                funcionarios.map((funcionario, index) => (
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
                    <TableCell align="left">
                      {funcionario.preferencias}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
}

export default Contato;
