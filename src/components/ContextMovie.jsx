import { useEffect, useRef, useState } from "react";
import { get } from "../data/httpCliente";
import MovieCard from "./MovieCard";
import "./ContextMovie.css";

const ContextMovie = () => {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    get("discover/movie", count).then((data) => {
      setMovies(data.results);
    });

    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "50px",
    });

    observer.observe(ref.current);

    return () => observer && observer.disconnect();
  }, []);

  useEffect(() => {
    setCount(count + 1);
    if (show) {
      get("discover/movie", count).then((data) => {
        setMovies([...movies, ...data.results]);
      });
    }
  }, [show]);

  return (
    <>
      <section className="container">
        {movies?.map(({ id, title, overview, poster_path }) => (
          <MovieCard
            key={id}
            id={id}
            title={title}
            overview={overview}
            poster={poster_path}
          />
        ))}
      </section>
      <span ref={ref}></span>
    </>
  );
};

export default ContextMovie;
