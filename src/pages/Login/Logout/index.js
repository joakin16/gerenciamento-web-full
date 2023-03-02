import "./logout.css";
import React, { useState } from "react";

function Logout() {
  const [timer, setTimer] = useState(5);

  function timerMenos() {
    let timerAux = timer;
    timerAux = timerAux - 1;
    setTimer(timerAux);
  }

  setTimeout(timerMenos, 1000);

  return (
    <div className="principal">
      <h2>
        {`Você saiu do sistema e será redirecionado em ${timer} segundos`}
      </h2>{" "}
      <br />
      <a>
        clique <a href="/login/login">aqui</a> para voltar para a tela de login
      </a>
    </div>
  );
}

export default Logout;
