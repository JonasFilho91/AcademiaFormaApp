import '../../styles/index.css';
import '../../styles/HeaderOfPage.modulo.css';
import '../../styles/logo.modulo.css';
import { Link } from 'react-router-dom';
import logo from '../Imagens/Logo.png';
//import './Navbar.css';
function HeaderOfPage() {
    return (
      <header id="header-login" className="header">
        <div className="conteiner">
          <div className="flex">
            <div className="logoConteiner">
              <Link to="/HomePag">
                <img
                  className="logo"
                  src={logo}//logo
                  alt="logo"
                />
              </Link>
            </div>
            <div id="nav-menu-navegacao">
              <nav>
                <ul >
                  <li>
                    <Link to="/HomePag"> Página inicial</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="btm-login-no"></div>
          </div>
        </div>
      </header>
    );
}

export default HeaderOfPage;