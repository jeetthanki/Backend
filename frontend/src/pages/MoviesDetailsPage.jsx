import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Moviesdata from "../data/Moviesdata";
import "./MoviesDetails.css";
function MoviesDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = Moviesdata.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <>
        <Navbar />
        <div className="details-page">
          <button onClick={() => navigate("/movies")}>Back to Movies</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-page">
        <button onClick={() => navigate(-1)}>Back</button>

        <img src={movie.posterUrl} alt={movie.title} />

        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
        <span>{movie.genre}</span>
        <p>{movie.plot}</p>
      </div>
    </>
  );
}

export default MoviesDetailsPage;
