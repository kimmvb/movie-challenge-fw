import axios, { AxiosResponse } from 'axios';

export interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface DiscoverMoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

interface MovieApiParams {
  api_key: string;
  include_adult: string;
  include_video: string;
  language: string;
  'primary_release_date.gte': string;
  'primary_release_date.lte': string;
  sort_by: string;
  page: number;
  with_genres?: string;
}

export const fetchMovies = (
  pageNumber: number,
  sortByOption: string = 'popularity.desc',
  genreId?: string
): Promise<DiscoverMoviesResponse> => {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'aed0b9b04b9b2314524e703621a1f16e';

  const params: MovieApiParams = {
    api_key: `${API_KEY}`,
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    'primary_release_date.gte': '1980-01-01',
    'primary_release_date.lte': '1989-12-31',
    page: pageNumber,
    sort_by: sortByOption
  };

  if (genreId !== undefined) {
    params.with_genres = genreId;
  }

  console.log(params);

  return axios
    .get<DiscoverMoviesResponse>(`${API_URL}/discover/movie`, {
      params: params
    })
    .then((response: AxiosResponse<DiscoverMoviesResponse>) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
