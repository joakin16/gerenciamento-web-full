import { TextField } from "@mui/material";

function InputNome({ inputNome, setInputNome }) {
  return (
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
  );
}

export default InputNome;
