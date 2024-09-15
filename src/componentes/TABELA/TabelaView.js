import '../../styles/index.css';
import LinhaTabelaView from './LinhaTabelaView';
function TabelaView() {
    
    return (
        <div className='ConteinerPrincipal'>
            <input type="text" placeholder="Pesquisar"/>
            <table ClassName='tabela'>
            <tr hehgt="10px">
                <th>Id_Funcionario</th>
                <th>Nome_completo</th>
                <th>CPF</th>
                <th>Endereço</th>
                <th>cargo</th>
            </tr>  
                <LinhaTabelaView/>
                <LinhaTabelaView/>
                <LinhaTabelaView/>                     
            </table>
        </div>
    )
}

export default TabelaView;