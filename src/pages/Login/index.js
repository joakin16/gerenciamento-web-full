import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  function goTo(go) {
    navigate(go);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="telaLogin">
        <TextField
          type={"text"}
          label="E-mail"
          style={{ width: "271px" }}
        ></TextField>
        <br />
        <TextField
          type={showPassword ? "text" : "password"}
          label="Password"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/");
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <br />
        <Button
          variant="contained"
          style={{ width: "271px", fontSize: "16px" }}
          onClick={() => navigate("/lista")}
        >
          entrar
        </Button>
        <br />
        <span>Não tem uma conta? </span>
        <a href="#" onClick={() => goTo("/cadastro")}>
          Cadastre-se
        </a>
        <br />
        <a href="#" onClick={() => goTo("/esquecisenha")}>
          Esqueci minha senha
        </a>
      </div>
    </ThemeProvider>
  );
}

export default Login;
