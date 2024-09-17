import Parse from "parse/dist/parse.min.js";

async function QueryFuncionario(valor) {
  
    // Cria uma consulta na classe (ou tabela) TestObject
    const tabelaquery = Parse.Object.extend('Funcionarios');
    const query = new Parse.Query(tabelaquery);
    
    if (valor === "") {
      try {
        // Executa a consulta
        const results = await query.find();
        // Faça algo com os valores Parse.Object retornados
        //alert(results.map((object) => object.get('Nome')));
        
        console.log(results.map((object) => object.get('Nome')));
        const ListaItens = results.map((object) => object.get('Nome'));
        
        return ListaItens;
      } catch (error) {
        alert('Erro ao realizar consulta: ' + error.message);
      }
      
    } else {
      try {
        query.contains("Nome", valor);
        // Executa a consulta
        const results = await query.find();
        // Faça algo com os valores Parse.Object retornados
        //const listItems = results.map(object => <li>{object}</li>);
        //return listItems;

        return results;
      } catch (error) {
        alert('Erro ao realizar consulta: ' + error.message);
      }
      
    }
    // Adiciona uma condição (exemplo: buscar objetos onde o campo 'foo' seja 'bar') 
    
   
  }

export default QueryFuncionario;