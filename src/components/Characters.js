import { Character } from "./Character";

export const Characters = ({ charList = [], aramaKelimesi = '' }) => {
    const filteredList = charList.filter(item =>
      item.name.toLowerCase().includes(aramaKelimesi.toLowerCase())
    );
  
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {filteredList.map(item => (
          <Character key={item.url} charObj={item} />
        ))}
      </div>
    );
  };  
  
  