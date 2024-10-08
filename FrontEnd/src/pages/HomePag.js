//import style
import '../styles/estilos_JF.css';
import '../styles/index.css';

//import componentes
import HeaderOfPage from '../componentes/layouts/HeaderOfPage.jsx';
import FooterOfPage from '../componentes/layouts/FooterOfPage.jsx';
//import ButtonForm from '../componentes/layouts/ButtonForm.jsx';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import DataList from '../DataList.js';

function HomePag() {
   // const [index, setIndex] = useState(0);
    

    return (
        <>
            <HeaderOfPage />
            <div className="divNave">
            <Link className="divMenuNave" to="/LoginGerenciaPag">Logar</Link>
            <Link className="divMenuNave" to="/MonitorAcademiaPag">Monitorar</Link>
            </div>
            <div className='divSubCabecalho'>
                </div>
                <div className="App">
        <header className="App-header">
            <h1>Consulta e Listagem de Dados</h1>
            <DataList />
        </header>
        </div>
    
           <FooterOfPage />
        </>
    )

}

export default HomePag;