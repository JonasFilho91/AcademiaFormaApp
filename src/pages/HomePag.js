//import style
import '../styles/estilos_JF.css';
import '../styles/index.css';

//import componentes
import HeaderOfPage from '../componentes/layouts/HeaderOfPage.jsx';
//import FooterOfPage from '../componentes/layouts/FooterOfPage.jsx';
//import ButtonForm from '../componentes/layouts/ButtonForm.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HomePag() {
    const [index, setIndex] = useState(0);

    return (
        <>
            <HeaderOfPage />
            <div>
                <h3>Painel de Controle</h3>
            </div>
            <div className="divNave">
            <Link className='btn' to="/LoginGerenciaPag"> <button className="btn btn-entrar" onClick={() => setIndex(0)}>Logar</button></Link>
            <Link className='btn' to="/MonitorAcademiaPag"> <button className="btn btn-entrar" onClick={() => setIndex(1)}>Monitorar Academia</button></Link>
                
            </div>
            <div className='divSubCabecalho'>
            </div>
        </>
    )

}

export default HomePag;