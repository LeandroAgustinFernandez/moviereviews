import "./MovieDetail.css";

const MovieDetail = ({
  poster = "",
  title = "",
  overview = "",
  release = "",
  genres = [],
  votes = 0,
}) => {
  const year = new Date(release).getFullYear();
  const average = votes * 10;

  return (
    <section className="movie_detail">
      <article className="movie_detail-image">
        <img src={poster} alt={title} />
      </article>
      <article className="movie_detail-info">
        <h3 className="movie_detail_title">
          {title}
          <span className="movie_release"> ({year})</span>
        </h3>
        {genres?.map((genre) => (
          <span className="genre" key={genre.name}>
            {genre.name}
          </span>
        ))}
        <div className="votes">
          Votes &nbsp;
          <div className="ratings">
            <div className="empty-stars"></div>
            <div className="full-stars" style={{ width: `${average}%` }}></div>
          </div>
        </div>
        <h4 className="movie_detail_subtitle">Overview</h4>
        <p className="movie_detail_description">{overview}</p>
      </article>
    </section>
  );
};

export default MovieDetail;
