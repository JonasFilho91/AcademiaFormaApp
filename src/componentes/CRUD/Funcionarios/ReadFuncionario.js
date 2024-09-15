import Parse from "parse/dist/parse.min.js";

async function QueryFuncionario(tabela, campo, valor) {
  
    // Cria uma consulta na classe (ou tabela) TestObject
    const tabelaquery = Parse.Object.extend(tabela);
    const query = new Parse.Query(tabelaquery);

    // Adiciona uma condição (exemplo: buscar objetos onde o campo 'foo' seja 'bar')
    query.equalTo(campo, valor);

    try {
      // Executa a consulta
      const results = await query.find();
      
      // Processa os resultados
      results.forEach((object) => {
        console.log('Objeto encontrado:', object);
        console.log('Campo foo:', object.get('foo'));
      });
      alert('Consulta realizada com sucesso!');
      return results;
    } catch (error) {
      alert('Erro ao realizar consulta: ' + error.message);
    }
   
  }

export default QueryFuncionario;