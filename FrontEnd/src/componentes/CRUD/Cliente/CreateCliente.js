import Parse from "parse/dist/parse.min.js";

async function CreateCliente(dados) {
    //Listtable é um Array de objetos
   
    //const Dados = JSON.parse(dados);

    const TabelaCliente = Parse.Object.extend("Cliente");
    const Cliente = new TabelaCliente();
    console.log(dados);
    Cliente.set("Nome_Completo", dados.Nome_Completo);
    Cliente.set("CPF", dados.CPF);
    Cliente.set("Endereco", dados.Endereco);
    Cliente.set("Idade", dados.Idade);
    Cliente.set("Peso", dados.Peso);
    Cliente.set("Plano", dados.Plano);   
    
    try {
      await Cliente.save();
      // Execute any logic that should take place after the object is saved.
      alert('Cliente ' + Cliente.Nome + ' salvo com sucesso!');
    }catch (error) {
        alert('Error de Cadastro de Cliente: ', error);
        console.log('Error de Cadastro de Cliente: ', error);
      }
}

export default CreateCliente;
