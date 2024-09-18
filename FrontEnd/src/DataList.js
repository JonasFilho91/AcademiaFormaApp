import React, { useEffect, useState } from 'react';

function DataList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <ul>
    {data.map(item => (
      <li key={item.id}>ID: {item.id}, Campo Nome: {item.Nome}</li>
    ))}
  </ul>
);
}

export default DataList;