import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const favorites = new Set();

// Add a route to get random movies
app.get('/api/movies/random', async (req, res) => {
  try {
    const response = await axios.get(
      'http://www.omdbapi.com/?s=random&type=movie&apikey=5e2770e3'
    );
    res.json(response.data.Search || []);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching random movie data.' });
  }
});
app.get('/api/movies/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${query}&apikey=5e2770e3`
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching movie data.' });
  }
});

app.get('/api/movies/favorites', (req, res) => {
  res.json(Array.from(favorites));
});

app.post('/api/movies/favorites/add', (req, res) => {
  const { imdbID } = req.body;
  if (!favorites.has(imdbID)) {
    favorites.add(imdbID);
    res.json({ message: 'Movie added to favorites.' });
  } else {
    res.status(400).json({ error: 'Movie is already in favorites.' });
  }
});

app.delete('/api/movies/favorites/remove', (req, res) => {
  const { imdbID } = req.body;
  if (favorites.has(imdbID)) {
    favorites.delete(imdbID);
    res.json({ message: 'Movie removed from favorites.' });
  } else {
    res.status(400).json({ error: 'Movie is not in favorites.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
