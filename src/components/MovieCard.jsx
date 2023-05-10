import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ id, title, poster }) => {
  const moviePoster = `https://image.tmdb.org/t/p/w300${poster}`;
  return (
    <article className="movie">
      <img className="movie_img" src={moviePoster} alt={title} />
      <p className="movie_title">{title}</p>
      <Link className="movie_btn" to={`/movie/${id}`}>
        More info +
      </Link>
    </article>
  );
};

export default MovieCard;
