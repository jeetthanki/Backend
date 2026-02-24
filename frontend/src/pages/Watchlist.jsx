import React from "react";
import Navbar from "../components/Navbar";
import { MovieWatchlist } from "../context/MovieWatchlist";
const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = React.useContext(MovieWatchlist);

  return (
    <>
      <Navbar />
      <div className="movies-container">
        <h1>My Watchlist</h1>

        {watchlist.length === 0 ? (
          <p>No movies added</p>
        ) : (
          <div className="movies-grid">
            {watchlist.map((movie) => (
              <div key={movie.id} className="movie-card">
                <button
                  className="watchlist-btn added"
                  onClick={() => removeFromWatchlist(movie.id)}
                >
                  Remove
                </button>

                <img src={movie.posterUrl} alt={movie.title} />

                <div className="movie-content">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Watchlist;
