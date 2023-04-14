import "./esquecisenha.css";
import React from "react";
import { Button, TextField } from "@mui/material";
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

function EsqueciSenha() {
  return (
    <ThemeProvider theme={theme}>
      <div className="principalEsqueciSenha">
        <h3>Esqueceu sua senha?</h3> <br />
        <a>Informe seu email e aguarde!</a> <br />
        <a>Vamos enviar as instruções para recuperar sua senha</a>
        <TextField
          label="Digite seu e-mail"
          style={{ width: "371px", marginTop: "20px", marginBottom: "20px" }}
        ></TextField>{" "}
        <Button variant="contained" style={{ width: "371px" }}>
          Recuperar Senha
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default EsqueciSenha;
