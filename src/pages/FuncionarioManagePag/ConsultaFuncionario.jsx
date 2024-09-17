//import style
import '../../styles/estilos_JF.css';
import '../../styles/index.css';
import { useState } from 'react';
//import componentes
//import QueryFuncionario from '../../componentes/CRUD/Funcionarios/QueryFuncionario';
import Lista from '../../componentes/Lista';
//import InputForm from '../../componentes/layouts/InputForm';
//import ButtonForm from '../../componentes/layouts/ButtonForm.jsx';
//import { useForm } from 'react-hook-form';

function ConsutaFuncionario() {
    
        const [value, setValue] = useState("");
        
        function Query() {
            setValue(value);
        }

    
    return (
            <div className="divContainer" with="100vw">
                <h1 className='title'>Consulta de Funcionário </h1>                
                <input className="input" type="text" onChange={e => setValue(e.target.value)}/>
                <button className="btn btn-entrar divContainer" onClick={e => {Query(); // React event object
}}>Pesquisar</button>
                <div>
                
                <Lista Nome="Funcionário" ObjetoConsulta={value} Campo="Nome"/>
                              
                </div>
            </div>
    )
}

export default ConsutaFuncionario;