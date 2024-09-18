//import Style
import HeaderOfPage from '../../componentes/layouts/HeaderOfPage';
import '../../styles/estilos_JF.css';
import '../../styles/index.css';
import ClienteLog from './ClienteLog';

function ClientesLog() {
    return (
        <>
        <h1>ClientesLog</h1>
        <HeaderOfPage/>
        <div className="divFlex">
                <div className="CardCenter">
                    <ClienteLog/>
                </div>
            </div>
       </>

    )
