import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Lista from "../pages/Lista";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Cadastro from "../pages/Cadastro";
import EsqueciSenha from "../pages/Esquecisenha";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esquecisenha" element={<EsqueciSenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
