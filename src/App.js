import React, { useEffect, useState } from 'react';
import { Characters } from './components/Characters';
import StarWarsInput from './components/StarWarsInput';
import { StarWarsApi } from './api/starWarsApi';

const App = () => {
  const [arama, setArama] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setArama(e.target.value);
  };

  useEffect(()=>{
    StarWarsApi.getPoeple().then(result =>setList(result));
  }, []);

    
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>

      <StarWarsInput value={arama} onChange={handleChange} />


      <Characters charList={list} aramaKelimesi={arama} />
    </div>
  );
};

export default App;