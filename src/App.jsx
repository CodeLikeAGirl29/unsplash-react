import { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import './App.css';

const App = () => {
	const [query, setQuery] = useState('');
	const [images, setImages] = useState([]);

	const handleSearch = async (e) => {
		e.preventDefault();
		const accessKey = import.meta.env.VITE_API_KEY;

		try {
			const response = await axios.get(
				`https://api.unsplash.com/search/photos`,
				{
					params: { query: query },
					headers: {
						Authorization: `Client-ID ${accessKey}`,
					},
				}
			);
			setImages(response.data.results);
		} catch (error) {
			console.error('Error fetching the images:', error);
		}
	};

	return (
		<div className='app'>
			<h1 className='heading'>Unsplash Image Search</h1>
			<form onSubmit={handleSearch}>
				<input
					type='text'
					placeholder='Search for images...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

				<button type='submit'>
					<FaSearch /> Search
				</button>
			</form>

			<div className='image-grid'>
				{images.map((image) => (
					<div key={image.id} className='image-item'>
						<img src={image.urls.small} alt={image.alt_description} />
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
