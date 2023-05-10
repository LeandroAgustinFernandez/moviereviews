const API = "https://api.themoviedb.org/3/";
const KEY = "d957208d6a70a7983d7f3f4f79d88808";

export async function get(path, page = 1) {
  return fetch(`${API}${path}?api_key=${KEY}&page=${page}`).then((result) =>
    result.json()
  );
}

export async function getByGenres(path, genre) {
  return fetch(`${API}${path}?api_key=${KEY}&with_genres=${genre}`).then(
    (result) => result.json()
  );
}
