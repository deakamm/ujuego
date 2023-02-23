import React, { useState, useEffect } from 'react';

function JuegoPage() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    async function fetchSuperheroes() {
      const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
      const data = await response.json();
      setSuperheroes(data);
    }
    fetchSuperheroes();
  }, []);

  if (superheroes.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <ul>
      {superheroes.map(superhero => (
        <li key={superhero.id}>
          <img src={superhero.images.sm} alt={superhero.name} />
          <h2>{superhero.name}</h2>
        </li>
      ))}
    </ul>
  );
}

export default JuegoPage;







