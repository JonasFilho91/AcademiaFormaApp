import '../../styles/index.css';
import '../../styles/estilos_JF.css';
import LinhaTabelaView from './LinhaTabelaView';
import Btngeral from '../layouts/Btngeral';

function TabelaView(Pesquisar) {
    
    

    return (
        <div className='ConteinerPrincipal'>
            <div>
            <input className="input" type="text" placeholder="Pesquisar"/>
            <div><Btngeral/></div>
            </div> 
            <table ClassName='tabela'>
            <tr hehgt="10px">
                <th>Id_Funcionario</th>
                <th>Nome_completo</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th>cargo</th>
            </tr>  
                {
                <LinhaTabelaView/>
                }
                              
            </table>
        </div>
    )
}

export default TabelaView;