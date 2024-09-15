import '../../styles/index.css';
function ColunaTabelaView(Id_Funcionario, Nome_completo, CPF, Endereço, cargo) {
    
    return (
        <>
                <th>{Id_Funcionario}</th>
                <th>{Nome_completo}</th>
                <th>{CPF}</th>
                <th>{Endereço}</th>
                <th>{cargo}</th>
        </>
    )
}
export default ColunaTabelaView;