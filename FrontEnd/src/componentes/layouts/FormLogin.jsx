// Style
import '../../styles/estilos_JF.css';
import '../../styles/index.css';
import ButtonForm from './ButtonForm';

//import componentes
import InputForm from './InputForm';

//import componentes


function FormLogin() {
    return (
        <>
        <div className="second-column">
          <h2 className="title title-second">Entrar</h2>
          <p className="description">Use seu E-mail e password:</p>
          <form className="form-entrar form-etrar-cadastrar" action="form">
            <InputForm NameClass="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            {/* <a href="#">Esqueci a senha</a> */}
            <ButtonForm Descricaoescricao="Entrar"/>
          </form>
          {/* form_entrar */}
        </div>
        </>
    )
}

export default FormLogin;