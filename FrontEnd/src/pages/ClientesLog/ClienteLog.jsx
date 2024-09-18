//import style
import '../../styles/estilos_JF.css';
import '../../styles/index.css';

//import componentes
//import InputForm from '../../componentes/layouts/InputForm';
import ButtonForm from '../../componentes/layouts/ButtonForm.jsx';
import { useForm } from 'react-hook-form';
import CreateCliente from '../../componentes/CRUD/Cliente/CreateCliente.js';


function CadastroCliente() {
    const { register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        CreateCliente(e);
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <h1>Cadastro de Cliente</h1>
            </div >
            <div>
            <input class="input" type="text" placeholder="Nome_Completo" {...register("Nome_Completo")}/>
            <input class="input" type="text" placeholder="CPF" {...register("CPF")}/>
            <input class="input" type="text" placeholder="Idade" {...register("Idade")}/>
            <input class="input" type="text" placeholder="Peso" {...register("Peso")}/>
            <input class="input" type="text" placeholder="Plano" {...register("Plano")}/>
            <input class="input" type="text" placeholder="Endereco" {...register("Endereco")}/>
            <ButtonForm type="submit" Descricao="Cadastrar"/>
            </div>
        </form>
    )
}

export default CadastroCliente;
