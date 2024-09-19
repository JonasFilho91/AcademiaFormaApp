//import style
import '../styles/estilos_JF.css';
import '../styles/index.css';

//import componentes
import HeaderOfPage from '../componentes/layouts/HeaderOfPage.jsx';
import CardLogin from '../componentes/CardLogin.js';
import FooterOfPage from '../componentes/layouts/FooterOfPage.jsx';


function LoginGerenciaPag() {
    return (
        <>
            <div className='ConteinerPrincipal'>
                <HeaderOfPage />
                <div><CardLogin/></div>
                <FooterOfPage />
            </div>
        </>
    )

}

export default LoginGerenciaPag;