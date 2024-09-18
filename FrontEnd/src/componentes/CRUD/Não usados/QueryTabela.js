import Parse from "parse/dist/parse.min.js";

async function QueryTabela(table) {
   
        const query = new Parse.Query(table);
        // Você também pode consultar usando um parâmetro de um objeto
        // query.equalTo('objectId', 'xKue915KBG');
        const results = await query.find();
        try {
          for (const object of results) {
            //Acesse os atributos do Objeto Parse usando o método .GET
            const myCustomKey1Name = object.get('myCustomKey1Name');
            const myCustomKey2Name = object.get('myCustomKey2Name');
            console.log(myCustomKey1Name);
            console.log(myCustomKey2Name);
          }
        } catch (error) {
          console.error('Error ao buscar tabela', error);
        }
}

export default QueryTabela;