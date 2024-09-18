//import Style
import HeaderOfPage from '../../componentes/layouts/HeaderOfPage';
import '../../styles/estilos_JF.css';
import '../../styles/index.css';
import CadastroFilial from './CadastroFilial';


function FiliaisManagePag() {
    return (
        <>
        <HeaderOfPage/>

        <div className="divFlex">
                <div className="CardCenter">
                    <CadastroFilial/>
                </div>
            </div>
       </>

    )

}

export default FiliaisManagePag;