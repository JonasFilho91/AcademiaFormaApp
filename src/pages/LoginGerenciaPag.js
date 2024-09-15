//import style
import '../styles/estilos_JF.css';
import '../styles/index.css';

//import componentes
import HeaderOfPage from '../componentes/layouts/HeaderOfPage.jsx';
import TesteOn from '../componentes/TesteOn.js';
import FooterOfPage from '../componentes/layouts/FooterOfPage.jsx';


function LoginGerenciaPag() {
    return (
        <>
            <div className='ConteinerPrincipal'>
                <HeaderOfPage />
                <div><TesteOn /></div>
                <FooterOfPage />
            </div>
        </>
    )

}

export default LoginGerenciaPag;