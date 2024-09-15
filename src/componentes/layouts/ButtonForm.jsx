//import style
import '../../styles/Btngeral.modulo.css';
//import componentes
function ButtonForm({type, Descricao}) {
    
    return (      
        <button className="btn-entrar btn" type={type} height="500vh" width="500vh">{Descricao}</button>
    )           

}  

export default ButtonForm;