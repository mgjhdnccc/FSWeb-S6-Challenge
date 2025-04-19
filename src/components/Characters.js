import { Character } from "./Character";

export const Characters = ({ charList = [], search = '' }) => {
  console.log("📋 Characters bileşenine gelen charList:", charList); // LOG 3

  const filteredList = charList.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("🔎 Filtrelenmiş liste:", filteredList); // LOG 4

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
      {filteredList.map(item => (
        <Character key={item.url} charObj={item} />
      ))}
    </div>
  );
};
      
  
  