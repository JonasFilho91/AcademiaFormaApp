//import Style
import "../../styles/Cards.modulo.css";
import "../../styles/Divs.modulo.css";
import "../../styles/estilos_JF.css";
import "../../styles/index.css";

//import componentes
import HeaderOfPage from "../../componentes/layouts/HeaderOfPage";
import CadastroEquipamento from "./CadastroEquipamento";
//import CadastroEquipamento from './CadastroEquipamento';
import { useState } from "react";
import FooterOfPage from "../../componentes/layouts/FooterOfPage";
function EquipamentoManagePag() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <HeaderOfPage />
      <div className="divNave">
        <h3>Equipamento</h3>
      </div>
      <div className="divNave">
        <button className="btn btn-entrar" onClick={() => setIndex(0)}>
          Consultar
        </button>
        <button className="btn btn-entrar" onClick={() => setIndex(1)}>
          Cadastrar
        </button>
      </div>
      <div className="divSubCabecalho">
        <div className="divFlex">
          {index === 1 && (
            <div className="CardCenter">
              <CadastroEquipamento />
            </div>
          )}
          {index === 0 && (
            <div className="CardEquipamento">{/*<CadastroEquipamento />*/}</div>
          )}
        </div>
      </div>
      <FooterOfPage />
    </>
  );
}

export default EquipamentoManagePag;
