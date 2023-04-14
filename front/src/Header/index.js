import "./style.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const theme = createTheme({
    status: {
      danger: "#FFF",
    },
    palette: {
      primary: {
        main: "#FFF",
        darker: "#FFF",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  const navigate = useNavigate();

  return (
    <header>
      <ThemeProvider theme={theme}>
        <a
          href="/listafuncionarios"
          onClick={() => navigate("/ListaFuncionarios")}
        >
          <img
            className="imagemLogo"
            src="https://youxgroup.com.br/wp-content/uploads/2021/07/logosite.png"
            alt="logosite"
          />
        </a>

        <div className="menuSuperiorDireito">
          <hr></hr>
          <div className="imagemUsuario">
            <img
              src="https://e7.pngegg.com/pngimages/96/344/png-clipart-user-profile-instagram-computer-icons-insta-head-silhouette.png"
              alt="imagem do usuário"
            ></img>
          </div>

          <div className="dadosUsuário">
            <span>Dados do usuário</span>
            <span>Cargo do usuário</span>
          </div>
          <Button
            size="large"
            startIcon={<ExitToAppIcon style={{ fontSize: "30px" }} />}
            onClick={() => navigate("/logout")}
            style={{
              fontSize: "40px",
              padding: "10px 20px",
              width: "50px",
              height: "50px",
            }}
          ></Button>
        </div>
      </ThemeProvider>
    </header>
  );
}

export default Header;
