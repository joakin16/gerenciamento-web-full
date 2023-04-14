import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./listafuncionarios.css";
import { Button, TablePagination } from "@mui/material";
import BasicModal from "../../Components/BasicModal";
import ComboButtons from "../../Components/ComboButtons";

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

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  const [funcionarios, setFuncionarios] = useState([]);
  const [atualizar, setAtualizar] = useState("");
  const api = "http://localhost:8080/api/funcionario/";
  const [row, setRow] = useState();

  const navigate = useNavigate();

  function goTo(go) {
    navigate(go);
  }

  useEffect(() => {
    const busca = async () => {
      const result = await axios.post(api + "page", {
        numeroPagina: 0,
        tamanhoPagina: 0,
      });

      setFuncionarios(result.data.content);
    };
    busca();
  }, [atualizar]);

  async function excluir(id, nomeFuncionario) {
    alert(
      "Não é pra poissível o campeão: " +
        nomeFuncionario +
        "pois a função está comentada"
    );
    // await axios.delete(api + id).then((result) => {
    //   setAtualizar(result);
    // });
  }

  async function visualizar(id) {
    console.log(id);
    goTo("" + id);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="tabela">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome do funcionário</TableCell>
                <TableCell align="right">Função</TableCell>
                <TableCell align="right">Habilidades</TableCell>
                <TableCell align="right">Preferencias</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {funcionarios
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((funcionario) => (
                  <TableRow
                    key={funcionario.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {funcionario.nomeFuncionario}
                    </TableCell>
                    <TableCell align="right">{funcionario.funcao}</TableCell>
                    <TableCell align="right">
                      {funcionario.habilidades}
                    </TableCell>
                    <TableCell align="right">
                      {funcionario.preferencias}
                    </TableCell>
                    <TableCell align="right">
                      <div className="botaoAcoes">
                        <Button variant="contained" size="small">
                          Editar
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() =>
                            excluir(funcionario.id, funcionario.nomeFuncionario)
                          }
                        >
                          Excluir
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => visualizar(funcionario.id)}
                        >
                          Visualizar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={funcionarios.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          ></TablePagination>
        </TableContainer>

        <BasicModal></BasicModal>
        <ComboButtons row={row}></ComboButtons>
      </div>
    </ThemeProvider>
  );
}
