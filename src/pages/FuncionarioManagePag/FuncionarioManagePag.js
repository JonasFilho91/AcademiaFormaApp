//import Style
import HeaderOfPage from '../../componentes/layouts/HeaderOfPage';
import '../../styles/estilos_JF.css';
import '../../styles/index.css';
//import CadastroFuncionario from './CadastroFuncionario';
import ConsultaFuncionario from './ConsultaFuncionario';

//import componentes
function FuncionarioManagePag() {
    return (
        <>
        <HeaderOfPage />
         <div>
                <h3>Funcionário</h3>
                <nav>
                <ul className="nav">
                  <li>
                     Página inicial
                  </li>
                  <li>
                     Funcionário
                  </li>
                </ul>
              </nav>
            </div>
        <div className='divSubCabecalho'>
           
            <div className="divFlex">
                <div className="CardCenter">
                    {/* <CadastroFuncionario/>*/}
                </div>
                <div className="CardCenter">
                    <ConsultaFuncionario />
                </div>
            </div>
        </div>
        </>
    )

}

export default FuncionarioManagePag;