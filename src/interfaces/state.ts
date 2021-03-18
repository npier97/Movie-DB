export interface IReduxState {
  query: string;
  search: {
    movies: IMovies[];
  };
  rated: {
    movies: IMovies[];
  };
}

export interface ITopRatedMovies {
  ratedMovies: IMovies[];
  getTopRated: () => void;
}

export interface IMovie {
  movie: IMovies;
}

export interface IForm {
  query: string;
  movies: IMovies[];
  setQuery: (value: string) => void;
  onSubmit: () => void;
}

interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
