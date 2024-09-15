// Style
import '../../styles/estilos_JF.css';
import '../../styles/index.css';
import '../../styles/Btngeral.modulo.css';
import InputForm from './InputForm';
import Btngeral from './Btngeral.jsx';



//import componentes


function FormCadastroCliente() {
    return (
        <>
        <div className="second-column">
          <h2 className="title title-second">Entrar</h2>
          <p className="description">Use seu E-mail e password:</p>
          <form className="form-entrar form-etrar-cadastrar" action="form">
            <InputForm NameClass="input" type="email" placeholder="Email" />
            <InputForm  className="input" type="password" placeholder="Password" />
            {/* <a href="#">Esqueci a senha</a> */}
            <Btngeral />
            <button class="btn btn-entrar">Entrar</button>
          </form>
          {/* form_entrar */}
        </div>
        </>
    )
}

export default FormCadastroCliente;