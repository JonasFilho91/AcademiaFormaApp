import QueryFuncionario from "./CRUD/Funcionarios/QueryFuncionario";


function Lista({Nome, ObjetoConsulta, Campo}) {
  var results = [];
  results = QueryFuncionario(ObjetoConsulta)
  
   if (results === "") {
    
    return (
        <>
        <h4>Lista de {Nome}</h4>
        {
          <ul>Registros encontrados!</ul>
        }
        </>
    )
   }else{
    return (
      
      <>
      <h4>Lista de {Nome}</h4>
      {
          <h1>{results}</h1>
        } asdasd
      </>
  )
   }
   
    
}

export default Lista;