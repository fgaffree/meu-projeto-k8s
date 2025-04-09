
import React, { useEffect, useState } from 'react';

function App() {
  const [hora, setHora] = useState('Carregando...');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.text())
      .then(setHora);
  }, []);

  return <h1>{hora}</h1>;
}

export default App;
