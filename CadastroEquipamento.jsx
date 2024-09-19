//import style
import "../../styles/Divs.modulo.css";
import "../../styles/estilos_JF.css";
import "../../styles/index.css";

//import componentes
//import InputForm from '../../componentes/layouts/InputForm';
import ButtonForm from "../../componentes/layouts/ButtonForm.jsx";
import { useForm } from "react-hook-form";
import CreateEquipamento from "../../componentes/CRUD/Equipamento/CreateEquipamento.js";

function CadastroEquipamento() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    CreateEquipamento(e);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="divflex">
        <h3 className="title">Cadastro de Equipamento</h3>
      </div>
      <div className="divFlex">
        <input
          className="input"
          type="text"
          placeholder="Descricao"
          {...register("Descricao")}
        />

        <input
          className="input"
          type="text"
          placeholder="Fabricante"
          {...register("Fabricante")}
        />

        <ButtonForm type="submit" Descricao="Cadastrar" />
      </div>
    </form>
  );
}

export default CadastroEquipamento;
