# CINEsearch - Your Movie Search and Favorites

CINEsearch is a web application that allows users to explore and manage their favorite movies. It provides a user-friendly interface for searching and discovering movies, viewing essential details, and saving them to your collection of favorites.

## Features

- **Search Movies:** Use the search bar to find movies by title, and get results from the OMDB API.
- **Movie Details:** View detailed information about each movie, including title, year of release, and more.
- **Favorites:** Save your favorite movies to your collection with a simple click of a heart icon.
- **Random Movies:** Discover 10 to 15 random movies on the main page without searching.
- **Debounced Search:** Efficiently search for movies with a debounced search bar to avoid excessive API calls.
- **Backend API:** Built with Node.js and Express to provide movie search and favorites functionality.
- **Server-side Storage:** Store your movie favorites on the server without requiring login/registration.
- **Clean and Intuitive UI:** Enjoy a simple, functional design that focuses on usability.

## Getting Started

To run the CINEsearch application locally, follow these steps:

1. **Frontend Setup:**

   - Clone this repository: `git clone https://github.com/roshanwaa/movie-search-and-favourites.git`
   - Navigate to the frontend directory: `cd movie-search-frontend`
   - Install dependencies: `npm install`
   - Start the development server: `npm start`

2. **Backend Setup:**

   - Clone your backend repository or follow the previous instructions.
   - Navigate to the backend directory.
   - Install backend dependencies: `npm install`
   - Start the backend server: `node app.js`

3. **Configuration:**

   - Ensure your OMDB API key is correctly configured in the backend.
   - Replace the API base URL in the frontend with your backend URL if necessary.

4. **Access the Application:**

   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the CINEsearch application.

## Usage

- Use the search bar to find movies by title.
- Click on a movie card to view detailed information.
- Click the heart icon to add or remove a movie from your favorites.
- Discover random movies on the main page without searching.

## Contributing

If you want to contribute to CINEsearch, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need assistance, feel free to contact the project owner:

- GitHub: [Your GitHub Profile](https://github.com/roshanwaa)
- Email: <kumroshan120@gmail.com>

## Acknowledgments

Special thanks to [TMDb](https://www.themoviedb.org) for providing movie data through their API.
