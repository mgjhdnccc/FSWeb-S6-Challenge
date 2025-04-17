import StarWarsInput from './components/StarWarsInput';
import React, { useEffect, useState } from 'react';
import { Characters } from './components/Characters';
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
      <h1 style={{ color: 'white' }}>Karakterler</h1>
  
      <StarWarsInput value={arama} onChange={handleChange} />
  
      <p style={{ color: 'white' }}>Aranan kelime: {arama}</p>
    </div>
  );
};

export default App;