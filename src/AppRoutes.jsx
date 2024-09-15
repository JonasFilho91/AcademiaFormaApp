import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePag from "./pages/HomePag";
import MonitorAcademiaPag from "./pages/MonitorAcademiaPag";
import ClientesLog from "./pages/ClientesLog";
import VagaEstacionamentoManagePag from "./pages/VagaEstacionamentoManagePag";
import LoginGerenciaPag from "./pages/LoginGerenciaPag";
import AcademiaManagePag from "./pages/AcademiaManagePag";
import FiliaisManagePag from "./pages/FiliaisManagePag";
import LojaManagePag from "./pages/LojaManagePag";
import PlanosManagePag from "./pages/PlanosManagePag";
import VagaEstacionamentoLog from "./pages/VagaEstacionamentoLog";
import FuncionarioManagePag from "./pages/FuncionarioManagePag/FuncionarioManagePag";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes> 
                    <Route path="/HomePag" element={<HomePag />} />
                    <Route path="/MonitorAcademiaPag" element={<MonitorAcademiaPag />} />
                    <Route path="/ClientesLog" element={<ClientesLog />} />
                    <Route path="/VagaEstacionamentoManagePag" element={<VagaEstacionamentoManagePag />} />
                    <Route path="/LoginGerenciaPag" element={<LoginGerenciaPag />} />
                    <Route path="/AcademiaManagePag" element={<AcademiaManagePag />} />
                    <Route path="/FuncionarioManagePag" element={<FuncionarioManagePag />} />
                    <Route path="/FiliaisManagePag" element={<FiliaisManagePag />} />
                    <Route path="/LojaManagePag" element={<LojaManagePag />} />
                    <Route path="/PlanosManagePag" element={<PlanosManagePag />} />
                    <Route path="/VagaEstacionamentoLog" element={<VagaEstacionamentoLog />} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;