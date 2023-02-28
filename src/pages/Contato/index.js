import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Bem vindo a página Contato</h1>
      <span>Número de contato (32) xxxx-xxxx</span> <br />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Contato;
