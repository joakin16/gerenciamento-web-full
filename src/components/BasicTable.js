import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function BasicTable({ funcionarios, ordenarCrescente, editar, deletar }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Nome do FUncionário(a)
              <Button
                id={1}
                className="botaoFiltro"
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
          {funcionarios
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((funcionario, index) => (
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={funcionarios.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default BasicTable;
