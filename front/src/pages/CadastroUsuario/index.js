import { Button, TextField } from "@mui/material";
import "./cadastrousuario.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";

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
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  function cadastrarUsuario() {
    if (
      nome === "" ||
      cargo === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setState({ ...state, open: true });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="principalCadastro">
        <h2 style={{ marginBottom: "50px" }}>Página de cadastro</h2>
        <TextField
          label="Digite seu nome"
          type="text"
          style={{ width: "271px", marginBottom: "10px" }}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></TextField>
        <TextField
          label="Digite seu cargo"
          type="text"
          style={{ width: "271px", marginBottom: "10px" }}
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        ></TextField>
        <TextField
          label="Digite seu email"
          style={{ width: "271px", marginBottom: "10px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          label="Digite a senha"
          type="password"
          style={{ width: "271px", marginBottom: "10px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <TextField
          label="Digite a senha novamente"
          type="password"
          style={{ width: "271px", marginBottom: "10px" }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          style={{
            width: "271px",
            height: "56px",
            fontSize: "17px",
          }}
          onClick={cadastrarUsuario}
        >
          Cadastrar
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default Cadastro;
