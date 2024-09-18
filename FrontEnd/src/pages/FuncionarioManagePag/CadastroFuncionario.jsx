//import style
import '../../styles/Divs.modulo.css';
import '../../styles/estilos_JF.css';
import '../../styles/index.css';

//import componentes
//import InputForm from '../../componentes/layouts/InputForm';
import ButtonForm from '../../componentes/layouts/ButtonForm';
import { useForm } from 'react-hook-form';
import CreateFuncionario from '../../componentes/CRUD/Funcionarios/CreateFuncionario.js';


function CadastroFuncionario() {
    const { register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        CreateFuncionario(e);
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="divflex">
            <h3 className="title">Cadastro de Funcionário</h3>
            </div>
            <div className="divFlex">
                <input className="input" type="text" placeholder="Nome" {...register("Nome")}/>
                <input className="input" type="number" placeholder="CPF" {...register("CPF")}/>
                <input className="input" type="text" placeholder="Cargo" {...register("Cargo")}/>
                <input className="input" type="email" placeholder="Email" {...register("Email")}/>
                <input className="input" type="text" placeholder="Endereço" {...register("Endereço")}/>
            <ButtonForm type="submit" Descricao="Cadastrar"/>
            </div>
        </form>
    )
}

export default CadastroFuncionario;