import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.css";

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

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <ThemeProvider theme={theme}>
      <div className="telaLogin">
        <TextField
          type={"text"}
          label="E-mail"
          style={{ width: "271px" }}
        ></TextField>{" "}
        <br />
        <TextField
          type={showPassword ? "text" : "password"}
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <Button
          variant="contained"
          style={{ width: "271px", fontSize: "16px" }}
          href="/"
        >
          entrar
        </Button>
        <br />
        <span>Não tem uma conta? </span>
        <a href="/cadastro" style={{ textDecoration: "none" }}>
          Cadastre-se
        </a>{" "}
        <br />
        <a href="/esquecisenha" style={{ textDecoration: "none" }}>
          Esqueci minha senha
        </a>
      </div>
    </ThemeProvider>
  );
}

export default Login;
