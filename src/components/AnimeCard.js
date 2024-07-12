import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AnimeCard.css' // Se você tiver um arquivo CSS para estilizar o card
import { AnimeContext } from '../context/AnimeContext';

const AnimeCard = ({ anime }) => {
  const { animes } = useContext(AnimeContext);
  return (
    <div className="anime-card">
      <img src={anime.image_url} alt={anime.title} className="anime-card-image" />
      <div className="anime-card-content">
        <h3>{anime.title}</h3>
        <p>{anime.synopsis}</p>
        <Link to={`/anime/${anime.id}`} className="anime-card-link">Ver mais detalhes</Link>
      </div>
    </div>
  );
};

export default AnimeCard;
