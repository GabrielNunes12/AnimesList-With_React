import React, { createContext, useState, useEffect } from 'react';
import { getAnimes } from '../services/animeService';

export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAnimes().then(data => {
      setAnimes(data);
      setFilteredAnimes(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const results = animes.filter(anime =>
      anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnimes(results);
  }, [searchTerm, animes]);

  return (
    <AnimeContext.Provider 
      value={{ 
        animes: filteredAnimes, 
        searchTerm, 
        setSearchTerm,
        loading 
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
