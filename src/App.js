import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/Home';
import AnimeDetailed from "./components/AnimeDetailed";
import { AnimeProvider } from './context/AnimeContext';

const App = () => {
	return (
		<>
			<AnimeProvider>
				<Header />
				<Router>
					<Routes>
						<Route exact path="/" element={<Home/>}/>
						<Route path="/anime/:id" element={<AnimeDetailed/>}/>
					</Routes>
				</Router>
				{/* Add more switch here */}
			</AnimeProvider>
		</>
	);
};

export default App;