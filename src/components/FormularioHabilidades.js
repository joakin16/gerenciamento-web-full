import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

function FormularioHabilidades({
  listaHabilidades,
  inputHabilidades,
  setInputHabilidades,
}) {
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

  return (
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
  );
}

export default FormularioHabilidades;
