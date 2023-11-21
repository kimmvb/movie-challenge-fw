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

export const fetchMovies = (pageNumber: number): Promise<DiscoverMoviesResponse> => {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'aed0b9b04b9b2314524e703621a1f16e';
  return axios
    .get<DiscoverMoviesResponse>(`${API_URL}/discover/movie`, {
      params: {
        api_key: `${API_KEY}`,
        include_adult: 'false',
        'primary_release_date.gte': '1980-01-01',
        'primary_release_date.lte': '1989-12-31',
        sort_by: 'popularity.desc',
        page: pageNumber
      }
    })
    .then((response: AxiosResponse<DiscoverMoviesResponse>) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
