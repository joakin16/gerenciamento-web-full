import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Logout from "../pages/Login/Logout";
import Cadastro from "../pages/Cadastro";
import EsqueciSenha from "../pages/Esquecisenha";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/login" element={<Login />} />
        <Route path="/login/logout" element={<Logout />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esquecisenha" element={<EsqueciSenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
