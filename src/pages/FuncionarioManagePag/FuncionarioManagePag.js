//import Style
import '../../styles/estilos_JF.css';
import '../../styles/index.css';
//import CadastroFuncionario from './CadastroFuncionario';
import ConsultaFuncionario from './ConsultaFuncionario';

//import componentes
function FuncionarioManagePag() {
    return (
        <div className="divFlex">
            <div className="CardCenter">
                {/* <CadastroFuncionario/>*/}
            </div>
            <div className="CardCenter">
                <ConsultaFuncionario />
            </div>
        </div>
    )

}

export default FuncionarioManagePag;