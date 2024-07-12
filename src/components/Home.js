import React, { useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import AnimeCard from '../components/AnimeCard';

const Home = () => {
  const { animes } = useContext(AnimeContext);
  return (
    <div>
      <h1>Anime List</h1>
      {!animes && <p>Loading...</p>}
      <div className="anime-list">
        {animes && animes.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Home;
