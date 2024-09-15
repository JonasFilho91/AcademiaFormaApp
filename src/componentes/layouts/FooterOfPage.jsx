//import style 
import '../../styles/index.css';
import '../../styles/estilos_JF.css';
import '../../styles/FooterOfPage.modulo.css';

//import componentes
import LogoAcademiaForma from '../LogoAcademiaForma.jsx';
//import { Link } from 'react-router-dom';
//import './Navbar.css';
function FooterOfPage() {
    return (
      <>
          <footer className="footer">
            <LogoAcademiaForma/>
            <h1>AcademiaForma</h1>
          </footer>
          </>
    )
}

export default FooterOfPage;