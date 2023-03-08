import "./logout.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [timer, setTimer] = useState(5);

  const navigate = useNavigate();

  function goTo(go) {
    navigate(go);
  }

  function timerMenos() {
    let timerAux = timer;
    timerAux = timerAux - 1;
    setTimer(timerAux);
  }

  setInterval(function () {
    timerMenos();
  }, 1000);

  useEffect(() => {
    setTimeout(function () {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div className="principal">
      <h2>
        {`Você saiu do sistema e será redirecionado em ${timer} segundos`}
      </h2>
      <br />
      <a href="#" onClick={() => goTo("/")}>
        clique aqui para voltar para a tela de login
      </a>
    </div>
  );
}

export default Logout;
