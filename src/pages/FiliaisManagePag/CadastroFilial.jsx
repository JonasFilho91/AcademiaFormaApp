//import style
import '../../styles/estilos_JF.css';
import '../../styles/index.css';

//import componentes
//import InputForm from '../../componentes/layouts/InputForm';
import ButtonForm from '../../componentes/layouts/ButtonForm.jsx';
import { useForm } from 'react-hook-form';
import CreateFuncionario from '../../componentes/CRUD/Funcionarios/CreateFuncionario.js';


function CadastroFuncionario() {
    const { register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        CreateFuncionario(e);
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <h1>Cadastro de Funcionário</h1>
            </div >
            <div>
            <input class="input" type="text" placeholder="Nome" {...register("Nome")}/>
            <input class="input" type="number" placeholder="CPF" {...register("CPF")}/>
            <input class="input" type="text" placeholder="Cargo" {...register("Cargo")}/>
            <input class="input" type="email" placeholder="Email" {...register("Email")}/>
            <input class="input" type="text" placeholder="Endereço" {...register("Endereço")}/>
            <ButtonForm type="submit" Descricao="Cadastrar"/>
            </div>
        </form>
    )
}

export default CadastroFuncionario;