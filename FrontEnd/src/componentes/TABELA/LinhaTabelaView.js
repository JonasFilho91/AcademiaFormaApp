import '../../styles/index.css';
import ColunaTabelaView from './ColunaTabelaView';
function LinhaTabelaView(ListaFuncionarios) {
    //Id_Funcionario, Nome_completo, CPF, Endereço, cargo
    return (
            <tr>
                <ColunaTabelaView 
                Id_Funcionario={ListaFuncionarios.Id_Funcionario} 
                Nome_completo={ListaFuncionarios.Nome_completo} 
                CPF={ListaFuncionarios.CPF} 
                Endereço={ListaFuncionarios.Endereço} 
                cargo={ListaFuncionarios.cargo} 
                />
            </tr>
    )
}

export default LinhaTabelaView;