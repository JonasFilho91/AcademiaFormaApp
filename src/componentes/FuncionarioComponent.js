import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

   export const FuncionarioComponent = () => {
     // State variables
     const [Funcionario, setFuncionario] = useState(null);

     
     async function addfuncionario() {
       try {
        // crie uma nova instância do objeto de análise
        const funcionario = new Parse.Object('funcionario');

        // defina os atributos que você deseja para o seu objeto
        funcionario.set('Id_ Funcionario','campo_Id_Funcionario');
        funcionario.set('Nome completo','campo_Nome_completo');
        funcionario.set('CPF','campo_CPF');
        funcionario.set('E-mail','campo_E-mail');
        funcionario.set('endereço','campo_endereço');
        funcionario.set('cargo','campo_cargo');


        // salve-o no Back4App Data Store
        await funcionario.save();
        alert('funcionario salvo!');
      } catch (error) {
        console.log('Error salvando novo funcionamento: ', error);
      }
    }

    async function buscarfuncionario() {
      // crie sua consulta Parse usando a classe funcionario que você criou
      const query = new Parse.Query('funcionario');
      // use o filtro equalTo para procurar o usuário cujo nome é John. este filtro pode ser usado em qualquer tipo de dados
      query.equalTo('name', 'John');
      // execute a consulta
      const funcionario = await query.find();
      // Alerta
      alert('Alerta: foram encontrados' + funcionario.length + 'no resultados');
      // acessar os atributos do objeto de análise
      
      setFuncionario(funcionario);
    }

    return (
      <div>
        <button onClick={addfuncionario}>Add funcionario</button>
        <button onClick={buscarfuncionario}>Buscar funcionario</button>
        {Funcionario !== null && (
          <div>
            <p>{`Name: ${Funcionario.get('name')}`}</p>
            <p>{`Email: ${Funcionario.get('email')}`}</p>
          </div>
        )}
      </div>
    );
  };