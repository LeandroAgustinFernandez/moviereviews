import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get, getByGenres } from "../data/httpCliente";
import MovieDetail from "../components/MovieDetail";
import RelatedMovies from "../components/RelatedMovies";

const Details = () => {
  let { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [related, setRelated] = useState([]);
  const [poster, setPoster] = useState("");

  useEffect(() => {
    get(`movie/${movieId}`).then((data) => {
      setMovie(data);
      setPoster(`https://image.tmdb.org/t/p/w300${data.poster_path}`);
      getByGenres("discover/movie", data.genres[0].id).then((data) => {
        let random = Math.ceil(Math.random() * data.results.length);
        let init = data.results.length - 4 >= random ? random : 1;
        setRelated(data.results.splice(init, 4));
      });
    });
  }, [movieId]);

  return (
    <>
      <MovieDetail
        poster={poster}
        title={movie.title}
        overview={movie.overview}
        release={movie.release_date}
        genres={movie.genres}
        votes={movie.vote_average}
      />
      <RelatedMovies related={related} />
    </>
  );
};

export default Details;
