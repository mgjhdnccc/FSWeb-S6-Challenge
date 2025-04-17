import React, { useEffect, useState } from 'react';
import StarWarsInput from './components/StarWarsInput';
import { Characters } from './components/Characters';
import { StarWarsApi } from './api/starWarsApi';

const App = () => {
  const [arama, setArama] = useState('');
  const [list, setList] = useState({ results: [] });

  const handleChange = (e) => {
    setArama(e.target.value);
  };

  useEffect(() => {
    StarWarsApi.getPeople().then(result => { setList(result); });
  }, []);  

  return (
    <div className="App" style={{ position: "relative", zIndex: 10 }}>
      <h1 style={{ color: 'white' }}>Karakterler</h1>

      <StarWarsInput value={arama} onChange={handleChange} />

      <Characters charList={list} aramaKelimesi={arama} />
    </div>
  );
};

export default App;