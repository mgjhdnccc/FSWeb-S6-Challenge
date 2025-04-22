import { Character } from "./Character";

export const Characters = ({ charList = [], aramaKelimesi = '' }) => {
  console.log("📋 Characters bileşenine gelen charList:", charList);

  const searchText = aramaKelimesi.toLowerCase();

  const filteredList = charList.filter(item => {
    return (
      item.name?.toLowerCase().includes(searchText) ||
      item.eye_color?.toLowerCase().includes(searchText) ||
      item.birth_year?.toLowerCase().includes(searchText) ||
      item.height?.toLowerCase().includes(searchText) ||
      item.mass?.toLowerCase().includes(searchText)
    );
  });

  console.log("🔎 Filtrelenmiş liste:", filteredList);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
      {filteredList.map(item => (
        <Character key={item.url} charObj={item} />
      ))}
    </div>
  );
};
      
  
  