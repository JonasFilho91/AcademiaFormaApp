//import style
import '../styles/estilos_JF.css';
import '../styles/index.css';
import FormLogin from './layouts/FormLogin.jsx';

//import componentes


function TesteOn() {
        return (
        <>
        <div className="conteiner-card">
            <div className="content first-content" id="card">
            <div className="first-column">
            <h2 className="title title-primary">Bem vindo de volta</h2>
            <p className="description"> Realize login para ter acesso a plataforma ou inscreva-se </p>    
        </div>
        {/* first-column */}
        <FormLogin/>
        {/* second-column */}
      </div>
      {/* content firdt-content */}
    </div>
   { /* conteiner-card */}
        </>
    )
}

export default TesteOn;