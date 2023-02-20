import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    }
  },
}

const listaHabilidades = [
  'React',
  'Ract Native',
  'Vue',
  'Java',
  'Angular'
]

const TransitionDelete = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
})

const TransitionAdicionar = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

function App() {

  const [funcionarios, setFuncionarios] = useState([
    {
      nome: 'Fiora',
      funcao: 'Desenvolvedora',
      habilidades: ['Vue', 'React']
    },
    {
      nome: 'Camille',
      funcao: 'Trainee',
      habilidades: ['Angular', 'Java']
    },
    {
      nome: 'Jax',
      funcao: 'Tester',
      habilidades: ['Vue', 'Angular']
    },
    {
      nome: 'Rakan',
      funcao: 'Analista',
      habilidades: ['Ract Native', 'React', 'Java']
    },
    {
      nome: 'Lucian',
      funcao: 'Desenvolvedor',
      habilidades: ['Java', 'Angular']
    }
  ])

  const [inputNome, setInputNome] = useState('')

  const [inputFuncao, setInputFuncao] = useState('')

  const [inputHabilidades, setInputHabilidades] = useState([])

  const [funcionarioDeletado, setFuncionarioDeletado] = useState('')

  const [indexDeletado, setIndiceDeletado] = useState()

  const [openDialog, setOpenDialog] = useState(false)

  const [openAdicionar, setOpenAdicionar] = useState(false)

  function abrirAdicionar() {
    setOpenAdicionar(!openAdicionar)
  }

  function fecharAdicionar() {
    setOpenAdicionar(!openAdicionar)
  }

  function adicionar() {
    setFuncionarios([...funcionarios, { nome: inputNome, funcao: inputFuncao, habilidades: [inputHabilidades] }])
    setInputNome('')
    setInputFuncao('')
    setInputHabilidades([])
    setOpenAdicionar(!openAdicionar)
  }

  function deletar(index, funcionario) {
    setIndiceDeletado(index)
    setFuncionarioDeletado(funcionario)
    setOpenDialog(!openDialog)
  }

  function deletarSim() {
    const alunosAux = [...funcionarios]
    alunosAux.splice(indexDeletado, 1)
    setFuncionarios(alunosAux)
    setOpenDialog(!openDialog)
  }

  function fecharDialogo() {
    setOpenDialog(!openDialog)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Lista de Funcionários</h1>

      <Button
        size="large"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          fontSize: '30px'
        }}
        variant="contained"
        onClick={abrirAdicionar}
      >
        <strong>+</strong>
      </Button>

      <Dialog
        open={openAdicionar}
        TransitionComponent={TransitionAdicionar}
        keepMounted
        onClose={fecharAdicionar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
        PaperProps={{ style: { maxHeight: "80vh", minHeight: '20vh', height: '20%' } }}
      >
        <DialogTitle id="alert-dialog-title">
          {`Digite os dados do novo usuário: `}
        </DialogTitle>
        <DialogActions>
          <TextField
            id="outlined-basic"
            type="text"
            label="Nome"
            variant="outlined"
            size="large"
            value={inputNome}
            margin="none"
            onChange={e => setInputNome(e.target.value)}
          >
          </TextField>

          <TextField
            id="outlined-basic"
            type="text"
            label="Função"
            variant="outlined"
            value={inputFuncao}
            onChange={e => setInputFuncao(e.target.value)}
          >
          </TextField>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Habilidades</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={inputHabilidades}
              onChange={e => setInputHabilidades(e.target.value)}
              input={<OutlinedInput label="Habilidades" />}
              renderValue={(selected) => selected.join(', ')}
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

          <Button
            variant="contained"
            onClick={adicionar}
          >
            Adicionar
          </Button>

        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nome do Funcionario</strong></TableCell>
              <TableCell align="right"><strong>Função</strong></TableCell>
              <TableCell align="right"><strong>Habilidades</strong></TableCell>
              <TableCell align="right"><strong></strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {funcionarios.map((funcionario, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {funcionario.nome}
                </TableCell>
                <TableCell align="right">{funcionario.funcao}</TableCell>
                <TableCell align="right">{funcionario.habilidades.join(', ')}</TableCell>
                <TableCell align="right">
                  <Button 
                    variant="text"
                    startIcon={<DeleteIcon />}
                    onClick={() => deletar(index, funcionario.nome)}
                  >
                  
                  </Button>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openDialog}
        TransitionComponent={TransitionDelete}
        keepMounted
        onClose={fecharDialogo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Deseja deletar o usuário ${funcionarioDeletado}?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => { setOpenDialog(!openDialog) }}>Não</Button>
          <Button onClick={deletarSim} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default App;