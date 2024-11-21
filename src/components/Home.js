import React, { useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import AnimeCard from '../components/AnimeCard';
import { SearchBar } from './SearchBar';
import { LoadingSpinner } from './common/LoadingSpinner'
import Pagination from './common/Pagination';

const Home = () => {
  const { animes, loading, currentPage, onPageChange } = useContext(AnimeContext);
  
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Anime List</h1>
      <div className="search-container">
        <SearchBar />
      </div>
      {loading && <LoadingSpinner />}
      <div className="anime-list">
        {animes?.data && (
          <>
            {animes.data.map(anime => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
            <Pagination 
              currentPage={currentPage} 
              totalPages={animes.pagination} 
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
