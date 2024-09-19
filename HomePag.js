//import style
import "../styles/estilos_JF.css";
import "../styles/index.css";

//import componentes
import HeaderOfPage from "../componentes/layouts/HeaderOfPage.jsx";
import FooterOfPage from "../componentes/layouts/FooterOfPage.jsx";
//import ButtonForm from '../componentes/layouts/ButtonForm.jsx';
import { Link } from "react-router-dom";
//import { useState } from 'react';

function HomePag() {
  // const [index, setIndex] = useState(0);

  return (
    <>
      <HeaderOfPage />
      <div className="divNave">
        <Link className="divMenuNave" to="/LoginGerenciaPag">
          Logar
        </Link>
        <Link className="divMenuNave" to="/MonitorAcademiaPag">
          Monitorar
        </Link>
        <Link className="divMenuNave" to="/EquipamentoManagePag">
          Equipamentos
        </Link>
      </div>
      <div className="divSubCabecalho"></div>
      <FooterOfPage />
    </>
  );
}

export default HomePag;
