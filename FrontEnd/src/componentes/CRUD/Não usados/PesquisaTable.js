import Parse from 'parse/dist/parse.min.js';

    async function buscarfuncionario(PesquisaTabela, campo, valor) {
      // crie sua consulta Parse usando a classe funcionario que você criou
      //Id_Funcionario, Nome_completo, CPF, Endereço, cargo
      const query = new Parse.Query(PesquisaTabela);
      // use o filtro equalTo para procurar o usuário cujo nome é John. este filtro pode ser usado em qualquer tipo de dados
      query.equalTo(campo, valor);
      // execute a consulta
      const ListaTabela = await query.find();
      // Alerta
      alert('Alerta: foram encontrados' + ListaTabela.length + 'no resultados');
      // acessar os atributos do objeto de análise
      return (
        ListaTabela
      )  
        }

    export default buscarfuncionario;