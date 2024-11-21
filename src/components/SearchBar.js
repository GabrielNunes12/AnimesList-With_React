import { useContext } from "react"
import { AnimeContext } from "../context/AnimeContext";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(AnimeContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar anime..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};