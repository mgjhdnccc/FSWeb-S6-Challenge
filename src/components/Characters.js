import { Character } from "./Character";

export const Characters = ({ charList = { results: [] }, aramaKelimesi = '' }) => {
    const filteredList = charList.results.filter(item =>
      item.name.toLowerCase().includes(aramaKelimesi.toLowerCase())
    );
  
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {
          filteredList.map(item => (
            <Character key={item.url} charObj={item} />
          ))
        }
      </div>
    );
  };
  