//import Style
import '../styles/estilos_JF.css';
import '../styles/index.css';
import '../styles/Cards.modulo.css';

//import componentes
import ButtonForm from '../componentes/layouts/ButtonForm.jsx';
import { Link } from 'react-router-dom';

function AcademiaManagePag() {
    return (        
        <div className="CardCenter">
            <div className="divFlex">
        <h1>O que deseja fazer?</h1>
        <Link className='btn' to="/FuncionarioManagePag"> <ButtonForm Descricao="Gerenciar Funcionários"/></Link>
        <Link className='btn' to="/HomePag"> <ButtonForm Descricao="Voltar"/></Link>
        <Link className='btn' to="/HomePag"> <ButtonForm Descricao="Voltar"/></Link>
        <Link className='btn' to="/HomePag"> <ButtonForm Descricao="Voltar"/></Link>
        <Link className='btn' to="/HomePag"> <ButtonForm Descricao="Voltar"/></Link>
        <Link className='btn' to="/HomePag"> <ButtonForm Descricao="Voltar"/></Link>
        <Link className='btn' to="/HomePag"> <ButtonForm Descricao="Voltar"/></Link>
        </div>
        </div>
    )

}

export default AcademiaManagePag;