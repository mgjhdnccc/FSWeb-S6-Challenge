import React, { useState, useEffect } from 'react';
import { StarWarsApi } from './api/starWarsApi';
import Characters from './components/Characters';
import StarWarsInput from './components/StarWarsInput';
import GitHubButton from './components/GitHubButton';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await StarWarsApi.getPeople();
      setCharacterList(data.results || []);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div className="app-wrapper">
      <h1>Karakterler</h1>
      <StarWarsInput value={search} onChange={handleSearch} />
      <Characters charList={characterList} search={search} />
      <GitHubButton />
    </div>
  );
}

export default App;