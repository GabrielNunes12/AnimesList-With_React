import React, { useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import AnimeCard from '../components/AnimeCard';
import { SearchBar } from './SearchBar';

const Home = () => {
  const { animes, loading } = useContext(AnimeContext);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Anime List</h1>
      <div className="search-container">
        <SearchBar />
      </div>
      {loading && <p style={{ textAlign: 'center' }}>Carregando...</p>}
      <div className="anime-list">
        {animes && animes.length > 0 ? (
          animes.map(anime => <AnimeCard key={anime.id} anime={anime} />)
        ) : (
          <p style={{ textAlign: 'center' }}>Nenhum anime encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Home;
