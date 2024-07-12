import React, { createContext, useState, useEffect } from 'react';
import { getAnimes } from '../services/animeService';

export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getAnimes().then(data => setAnimes(data));
  }, []);

  return (
    <AnimeContext.Provider value={{ animes }}>
      {children}
    </AnimeContext.Provider>
  );
};
