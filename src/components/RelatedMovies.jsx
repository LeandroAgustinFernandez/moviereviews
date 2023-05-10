import MovieCard from "./MovieCard";
import './RelatedMovies.css'

const RelatedMovies = ({ related }) => {
  return (
    <>
    <h2 className="subtitle">Related Movies</h2>
    <article className="container-related">
      {related?.map(({ id, title, overview, poster_path }) => (
        <MovieCard
          key={id}
          id={id}
          title={title}
          overview={overview}
          poster={poster_path}
        />
      ))}
    </article>
    </>
  );
};

export default RelatedMovies;
