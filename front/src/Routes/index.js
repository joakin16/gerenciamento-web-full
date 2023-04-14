import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import CadastroFuncionario from "../pages/CadastroFuncionario";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import CadastroUsuario from "../pages/CadastroUsuario";
import EsqueciSenha from "../pages/Esquecisenha";
import ListaFuncionarios from "../pages/ListaFuncionarios";
import Erro from "../pages/Erro";
import Funcionario from "../pages/Funcionario";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cadastroFuncionario" element={<CadastroFuncionario />} />
        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/listafuncionarios" element={<ListaFuncionarios />} />
        <Route path="/esquecisenha" element={<EsqueciSenha />} />
        <Route path="/listafuncionarios/:id" element={<Funcionario />}></Route>

        <Route path="*" element={<Erro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
