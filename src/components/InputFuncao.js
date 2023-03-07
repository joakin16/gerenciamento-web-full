import { TextField } from "@mui/material";

function InputFuncao({ inputFuncao, setInputFuncao }) {
  return (
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
  );
}

export default InputFuncao;
