import { useNavigate } from "react-router-dom";
import "./erro.css";

function Erro() {
  const navigate = useNavigate();

  function goTo(go) {
    navigate(go);
  }

  return (
    <div className="container">
      <h2>Ops parece que essa página não existe!</h2>
    </div>
  );
}

export default Erro;
