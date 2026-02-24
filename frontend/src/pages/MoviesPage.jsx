import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Moviesdata from "../data/Moviesdata";
import { MovieWatchlist } from "../context/MovieWatchlist";
import "./MoviesPage.css";

function MoviesPage() {
  const navigate = useNavigate();
  const movies = Moviesdata;
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    React.useContext(MovieWatchlist);

  return (
    <>
      <Navbar />

      <div className="movies-container">
        <h1>Movies</h1>

        <div className="movies-grid">
          {movies.map((movie) => {
            const isAdded = watchlist.some((item) => item.id === movie.id);
            return (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                <button
                  className={`watchlist-btn ${isAdded ? "added" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isAdded) {
                      removeFromWatchlist(movie.id);
                    } else {
                      addToWatchlist(movie);
                    }
                  }}
                >
                  {isAdded ? "✓ Added" : "+ Watchlist"}
                </button>
                <img src={movie.posterUrl} alt={movie.title} />

                <div className="movie-content">
                  <h3>{movie.title}</h3>
                  <p className="movie-year">{movie.year}</p>
                  <span className="movie-genre">{movie.genre}</span>
                  <p className="movie-plot">{movie.plot}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}


export default MoviesPage;
