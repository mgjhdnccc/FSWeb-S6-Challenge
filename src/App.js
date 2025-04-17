import React, { useState } from 'react';

const App = () => {
  const [arama, setArama] = useState('');

  const handleChange = (e) => {
    setArama(e.target.value);
  };

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Karakterler</h1>
      <input
        type="text"
        placeholder="Ara..."
        value={arama}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '1.2em', borderRadius: '6px' }}
      />
      <p style={{ color: 'white' }}>Aranan kelime: {arama}</p>
    </div>
  );
};

export default App;
