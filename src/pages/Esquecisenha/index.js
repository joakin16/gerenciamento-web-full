import "./esquecisenha.css";
import React, { useState } from "react";
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
        <a>Vamos enviar as instruções para recuperar sua senha</a> <br />
        <br />
        <br />
        <TextField
          label="digite seu e-mail"
          style={{ width: "271px" }}
        ></TextField>{" "}
        <br />
        <Button variant="contained" style={{ width: "271px" }}>
          Recuperar Senha
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default EsqueciSenha;
