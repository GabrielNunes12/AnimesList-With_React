import React, { createContext, useState, useEffect } from 'react';
import { getAnimes } from '../services/animeService';

export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnimes, setFilteredAnimes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page = 1) => {
    setLoading(true);
    try {
      let result = await getAnimes(page);
      setAnimes(result);
      setFilteredAnimes(result);
    } catch (error) {
      console.error("Erro ao buscar animes:", error);
    } finally {
      setLoading(false);
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <AnimeContext.Provider 
      value={{ 
        animes: filteredAnimes, 
        searchTerm, 
        setSearchTerm,
        loading,
        currentPage,
        onPageChange: handlePageChange
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
