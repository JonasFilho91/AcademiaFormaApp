import Parse from 'parse/dist/parse.min.js';

async function CriarTabela(NomeTabela) {
  const myNewObject = new Parse.Object(NomeTabela);
  myNewObject.set('myCustomKey1Name', 'myCustomKey1Value');
  myNewObject.set('myCustomKey2Name', 'myCustomKey2Value');
  try {
    const result = await myNewObject.save();
    //Acesse os atributos do Objeto Parse usando o método .GET
    console.log('object myCustomKey1Name: ', result.get('myCustomKey1Name'));
    console.log('object myCustomKey2Name: ', result.get('myCustomKey2Name'));
    console.log('ParseObject created', result);
  } catch (error) {
    console.error('Error while creating ParseObject: ', error);
  }
};

export default CriarTabela;