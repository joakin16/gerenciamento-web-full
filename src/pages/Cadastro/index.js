import { Button, TextField } from "@mui/material";
import "./cadastro.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function Cadastro() {
  return (
    <ThemeProvider theme={theme}>
      <div className="principalCadastro">
        <h2 style={{ marginBottom: "50px" }}>Página de cadastro</h2>
        <span style={{ marginRight: "182px", marginBottom: "10px" }}>
          E-mail
        </span>
        <TextField
          label="Digite seu email"
          style={{ width: "271px" }}
        ></TextField>
        <span
          style={{
            marginRight: "162px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          Password
        </span>
        <TextField
          label="Digite a senha"
          type="password"
          style={{ width: "271px" }}
        ></TextField>
        <span
          style={{
            marginRight: "162px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          Password
        </span>

        <TextField
          label="Digite a senha novamente"
          type="password"
          style={{ width: "271px" }}
        ></TextField>
        <Button
          variant="contained"
          style={{
            marginTop: "20px",
            width: "271px",
            height: "56px",
            fontSize: "17px",
          }}
        >
          Cadastrar
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default Cadastro;
