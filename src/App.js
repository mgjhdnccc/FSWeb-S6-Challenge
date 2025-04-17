import React, { useEffect, useState } from 'react';
import { Characters } from './components/Characters';
import StarWarsInput from './components/StarWarsInput';
import { StarWarsApi } from './api/starWarsApi';

const App = () => {
  const [arama, setArama] = useState('');
  const [list, setList] = useState([]); // Doğrudan DİZİ

  const handleChange = (e) => {
    setArama(e.target.value);
  };

  useEffect(() => {
    StarWarsApi.getPeople().then(result => {
      console.log("API'den gelen veri:", result);
      setList(result.results); // ❗️Sadece results kısmı, çünkü bu bir dizi
    });
  }, []);

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1 style={{ color: "white" }}>Karakterler</h1>
      <StarWarsInput value={arama} onChange={handleChange} />
      <Characters charList={list} aramaKelimesi={arama} />
    </div>
  );
};

export default App;