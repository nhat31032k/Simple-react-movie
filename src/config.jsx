export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const tmbdEnpoint = "https://api.themoviedb.org/3/movie";
const tmdbSearch = "https://api.themoviedb.org/3/search/movie";
export const apiKey = "33ca101e71974821d244c04ed6f31284";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmbdEnpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (moviesId) => `${tmbdEnpoint}/${moviesId}?api_key=${apiKey}`,
  getMovieCredit: (moviesId) =>
    `${tmbdEnpoint}/${moviesId}/credits?api_key=${apiKey}`,
  getMovieReview: (moviesId) =>
    `${tmbdEnpoint}/${moviesId}/reviews?api_key=${apiKey}`,
  getMovieVideo: (moviesId) =>
    `${tmbdEnpoint}/${moviesId}/videos?api_key=${apiKey}`,
  getMovieSimilar: (moviesId) =>
    `${tmbdEnpoint}/${moviesId}/similar?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
  videoThumnail: (url) => `https://www.youtube.com/embed/${url}`,
  getMovieSearch: (query, page = 1) =>
    `${tmdbSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
};
