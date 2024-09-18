


async function addtabela(table, campos) {
       try {
        await table.save();
        alert('Dados salvos!');
      } catch (error) {
        console.log('Error ao tentar salvar ', error);
      }
    }

    export default addtabela;