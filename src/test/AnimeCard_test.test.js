import { render, screen } from '@testing-library/react';
import React from 'react';
import AnimeCard from '../components/AnimeCard';
import { AnimeProvider } from '../context/AnimeContext';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

test('it should renders AnimeCards and find the first anime', () => {
    // Mock the context value
    const mockContextValue = [{
			image_url: "https://cdn.myanimelist.net/images/anime/3/40451.jpg", 
			title: "Bleach",
			synopsis: "This is a complete list of episodes for the Bleach anime series. The list is broken into several story arcs and includes a summary of each story arc and the original broadcast date for each episode. With the exception of the five arcs focusing on the Bount, New Captain Shūsuke Amagai, Zanpakutō Unknown Tales, Beast Swords and Gotei 13 Invading Army, each arc is an adaptation of the original Bleach manga by Tite Kubo, with some filler (non-canonical) episodes airing during these arcs for different reasons. These arcs were produced to allow time for Tite Kubo to advance the storyline in the manga. Most of the later English titles are translations from the Japanese titles. Those episodes with official English titles have the title shown above the translation of its Japanese equivalent.", 
			id: 2
    }];
  render(
    <AnimeProvider value={{ animes: mockContextValue }}>
			<BrowserRouter>
				<AnimeCard anime={mockContextValue[0]} />
			</BrowserRouter>
    </AnimeProvider>
	);
  const linkElement = screen.getByText(/This is a complete list of episodes/i);
  expect(linkElement).toBeInTheDocument();
});
