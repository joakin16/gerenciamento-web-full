import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./funcionario.css";

function Funcionario() {
  const { id } = useParams();
  const api = "http://localhost:8080/api/funcionario/";
  const [funcionario, setFuncionario] = useState([]);

  useEffect(() => {
    async function buscaId() {
      const result = await axios.get(api + id);
      console.log(result);
      setFuncionario(result.data);
    }
    buscaId();
  }, []);

  return (
    <div className="container">
      <h2>Campeão: {funcionario.nomeFuncionario}</h2>

      <span>Id: {id}</span>
      <span>Nome: {funcionario.nomeFuncionario}</span>
      <span>Função: {funcionario.funcao}</span>
      <span>Habilidades: {funcionario.habilidades}</span>
      <span>Preferências: {funcionario.preferencias}</span>
      <span>Data de inserção: {funcionario.data}</span>
    </div>
  );
}

export default Funcionario;
