import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <header>
      <a href="/">
        <img
          className="imagemLogo"
          src="https://youxgroup.com.br/wp-content/uploads/2021/07/logosite.png"
        />
      </a>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login/login">Login</Link>
        <Link to="/login/logout">Logout</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/esquecisenha">EsqueciSenha</Link>
      </div>
    </header>
  );
}

export default Header;
