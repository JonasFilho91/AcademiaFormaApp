import Parse from "parse/dist/parse.min.js";

async function CreateFuncionario(dados) {
    //Listtable é um Array de objetos
   
    //const Dados = JSON.parse(dados);

    const TabelaFuncionarios = Parse.Object.extend("Funcionarios");
    const Funcionario = new TabelaFuncionarios();
    console.log(dados);
    Funcionario.set("Nome", dados.Nome);
    Funcionario.set("CPF", dados.CPF);
    Funcionario.set("Cargo", dados.Cargo);
    Funcionario.set("Email", dados.Email);
    Funcionario.set("Endereco", dados.Endereco);   
    
    try {
      await Funcionario.save();
      // Execute any logic that should take place after the object is saved.
      alert('Funcionario ' + Funcionario.Nome + ' salvo com sucesso!');
    }catch (error) {
        alert('Error saving new person: ', error);
        console.log('Error saving new person: ', error);
      }
}

export default CreateFuncionario;