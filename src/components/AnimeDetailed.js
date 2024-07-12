import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { AnimeContext } from "../context/AnimeContext";


function AnimeDetailed() {
	const [anime, setAnime] = useState([]);
	const { id } = useParams();
	const {animes} = useContext(AnimeContext);
	useEffect(() => {
		setAnime(animes.filter(idAnime => idAnime.id === Number(id)));
	}, [id, animes]);
	return (
		<div>
			<h1>Anime Detailed Page</h1>
			{anime && anime.map(anime => (
				<div key={anime.id}>
					<h2>{anime.title}</h2>
					<img src={anime.image_url} alt={anime.title} />
					<p>{anime.synopsis}</p>
				</div>
			) || {})}
		</div>
	);
}

export default AnimeDetailed;