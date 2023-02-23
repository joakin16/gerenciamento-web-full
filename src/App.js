import React, { useEffect, useState } from "react";
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
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

function App() {
  const [funcionarios, setFuncionarios] = useState([
    {
      nome: "Camille",
      funcao: "Trainee",
      habilidades: ["Angular", "Java"],
      preferencias: "Front-end",
    },
    {
      nome: "Fiora",
      funcao: "Desenvolvedora",
      habilidades: ["Vue", "React"],
      preferencias: "Back-end",
    },
    {
      nome: "Jax",
      funcao: "Tester",
      habilidades: ["Vue", "Angular"],
      preferencias: "Front-end",
    },
    {
      nome: "Lucian",
      funcao: "Desenvolvedor",
      habilidades: ["Java", "Angular"],
      preferencias: "Back-end",
    },
    {
      nome: "Rakan",
      funcao: "Analista",
      habilidades: ["Ract Native", "React", "Java"],
      preferencias: "Front-end",
    },
  ]);

  const [inputNome, setInputNome] = useState("");

  const [inputFuncao, setInputFuncao] = useState("");

  const [inputHabilidades, setInputHabilidades] = useState([]);

  const [inputPreferencias, setInputPreferencias] = useState("");

  const [funcionarioDeletado, setFuncionarioDeletado] = useState("");

  const [indexEditado, setIndexEditado] = useState();

  const [indexDeletado, setIndiceDeletado] = useState();

  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const [openAdicionar, setOpenAdicionar] = useState(false);

  const [openDialogoEditar, setOpenDialogoEditar] = useState(false);

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
      inputHabilidades.length === 0
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

  function fecharEditar() {
    setOpenDialogoEditar(!openDialogoEditar);
  }

  function editar(index, nome, funcao, habilidades) {
    setOpenDialogoEditar(!openDialogoEditar);
    setInputNome(nome);
    setInputFuncao(funcao);
    setInputHabilidades([habilidades]);
    setIndexEditado(index);
  }

  function editarSim() {
    const funcionariosAux = funcionarios.slice();
    funcionariosAux[indexEditado] = {
      nome: inputNome,
      funcao: inputFuncao,
      habilidades: inputHabilidades,
      preferencias: inputPreferencias,
    };
    setFuncionarios(funcionariosAux);
    setOpenDialogoEditar(!openDialogoEditar);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Lista de Funcionários</h1>

      {/* Botão abrirAdicionar */}

      <Button
        size="large"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "30px",
          fontSize: "30px",
        }}
        variant="contained"
        onClick={abrirAdicionar}
      >
        <strong>+</strong>
      </Button>

      {/* Diálogo Adicionar */}

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
          {/* inputs  */}

          <div
            style={{ marginTop: 20, display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="outlined-basic"
              type="text"
              label="Nome"
              variant="outlined"
              size="large"
              value={inputNome}
              margin="normal"
              onChange={(e) => setInputNome(e.target.value)}
              style={{ marginRight: 15, marginLeft: 10 }}
            ></TextField>

            <TextField
              id="outlined-basic"
              type="text"
              label="Função"
              variant="outlined"
              value={inputFuncao}
              margin="normal"
              onChange={(e) => setInputFuncao(e.target.value)}
              style={{ marginRight: 15, marginLeft: 10 }}
            ></TextField>

            <FormControl sx={{ width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Habilidades
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={inputHabilidades}
                onChange={(e) => setInputHabilidades(e.target.value)}
                input={<OutlinedInput label="Habilidades" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                style={{ marginRight: 15, marginLeft: 10 }}
              >
                {listaHabilidades.map((name, index) => (
                  <MenuItem key={index} value={name}>
                    <Checkbox checked={inputHabilidades.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: 300 }}>
              <InputLabel id="demo-simple-select-label">
                Preferências
              </InputLabel>
              <Select
                id="demo-simple-select"
                labelId="demo-simple-select-label"
                type="text"
                label="Preferências"
                variant="outlined"
                value={inputPreferencias}
                margin="normal"
                onChange={(e) => setInputPreferencias(e.target.value)}
                style={{ marginRight: 15, marginLeft: 10, marginTop: 15 }}
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

          {/* Botão confirmação  */}

          {inputNome === "" ? (
            <Button variant="contained" onClick={adicionarSim}>
              Adicionar
            </Button>
          ) : (
            <Button variant="contained" onClick={adicionarSim}>
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

      {/* fazer um operador ternário para os dois botões (editar e adicionar)
          e tentar fazer tudo em um diálogo só, deixar o botão em baixo
      */}

      {/* Diálogo Editar */}

      <Dialog
        open={openDialogoEditar}
        TransitionComponent={TransitionAdicionar}
        keepMounted
        onClose={fecharEditar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
        PaperProps={{
          style: { maxHeight: "80vh", minHeight: "20vh", height: "25%" },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <span
            style={{ display: "flex", justifyContent: "center" }}
          >{`Digite os novos dados do usuário: `}</span>
        </DialogTitle>
        <DialogActions>
          <div style={{ marginTop: 20 }}>
            <TextField
              id="outlined-basic"
              type="text"
              label="Nome"
              variant="outlined"
              size="large"
              value={inputNome}
              margin="none"
              onChange={(e) => setInputNome(e.target.value)}
              style={{ marginRight: 15, marginLeft: 10 }}
            ></TextField>

            <TextField
              id="outlined-basic"
              type="text"
              label="Função"
              variant="outlined"
              value={inputFuncao}
              onChange={(e) => setInputFuncao(e.target.value)}
              style={{ marginRight: 15 }}
            ></TextField>

            <FormControl sx={{ width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Habilidades
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={inputHabilidades}
                onChange={(e) => setInputHabilidades(e.target.value)}
                input={<OutlinedInput label="Habilidades" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {listaHabilidades.map((name, index) => (
                  <MenuItem key={index} value={name}>
                    <Checkbox checked={inputHabilidades.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div style={{ display: "flex" }}>
            {}
            <Button variant="contained" onClick={editarSim}>
              Salvar
            </Button>
          </div>
        </DialogActions>
      </Dialog>

      {/* Tabela */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nome do Funcionario</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Função</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Habilidades</strong>
              </TableCell>

              <TableCell align="right">
                <strong>Preferências</strong>
              </TableCell>
              <TableCell align="right">
                <strong></strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {funcionarios.map((funcionario, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {funcionario.nome}
                </TableCell>
                <TableCell align="right">{funcionario.funcao}</TableCell>
                <TableCell align="right">
                  {funcionario.habilidades.join(", ")}
                </TableCell>
                <TableCell align="right">{funcionario.preferencias}</TableCell>
                <TableCell align="right">
                  {/* Botão de edit */}

                  <Button
                    variant="text"
                    startIcon={<EditIcon />}
                    onClick={() =>
                      editar(
                        index,
                        funcionario.nome,
                        funcionario.funcao,
                        funcionario.habilidades
                      )
                    }
                  ></Button>

                  {/* Botão de delete */}

                  <Button
                    variant="text"
                    startIcon={<DeleteIcon />}
                    onClick={() => deletar(index, funcionario.nome)}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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

      {/* Div e snackbar de dados inválidos*/}

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
    </div>
  );
}

export default App;
