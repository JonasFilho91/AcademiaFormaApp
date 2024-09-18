import Parse from "parse/dist/parse.min.js";

async function updatetabela(Nametable, ListtableCow, ListtableValue) {
    //Listtable é um Array de objetos
    try {
        // cria uma nova instância do objeto de análise
        const MyTableObjet = Parse.Object.extend(Nametable);
        const myTableObjet = new MyTableObjet();
        
        myTableObjet.save().then((myTableObjet) => {

            var n = 0;
            for (const ValorCampo of ListtableCow) {
    
                myTableObjet.set( ValorCampo, ListtableValue[n]);
                n++;
            }
            return myTableObjet.save();
          });
      } catch (error) {
        console.log('Error saving new person: ', error);
      }
    }

  export default updatetabela;