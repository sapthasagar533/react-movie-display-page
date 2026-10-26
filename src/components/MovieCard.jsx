
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useMovieContext();

  const favorite = isFavorite(movie.id);

  function onFavoriteClick() {
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : undefined
          }
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            type="button"
            className="favorite-btn"
            onClick={onFavoriteClick}
            aria-label={
              favorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {favorite ? "♥" : "♡"}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
