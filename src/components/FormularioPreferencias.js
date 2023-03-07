import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function FormularioPreferencias({
  inputPreferencias,
  setInputPreferencias,
  listaPreferencias,
}) {
  return (
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
  );
}

export default FormularioPreferencias;
