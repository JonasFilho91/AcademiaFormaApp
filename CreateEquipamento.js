import Parse from "parse/dist/parse.min.js";

async function CreateEquipamento(dados) {
  //Listtable é um Array de objetos

  //const Dados = JSON.parse(dados);

  const TabelaEquipamento = Parse.Object.extend("Equipamento");
  const Equipamento = new TabelaEquipamento();
  console.log(dados);
  Equipamento.set("Descricao", dados.Descricao);

  Equipamento.set("Fabricante", dados.Fabricante);

  try {
    await Equipamento.save();
    // Execute any logic that should take place after the object is saved.
    alert("Equipamento" + Equipamento.Descricao + " salvo com sucesso!");
  } catch (error) {
    alert("Error saving new person: ", error);
    console.log("Error saving new person: ", error);
  }
}

export default CreateEquipamento;
