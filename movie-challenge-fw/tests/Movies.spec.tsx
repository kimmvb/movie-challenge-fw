import React from 'react';
import { test, jest, expect, describe } from '@jest/globals';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Movies from '../src/components/home/Movies';
import { MovieProvider } from '../src/components/MovieContext';
import { fetchMovies } from '../src/components/data/FetchMovies';

//Mock to API calls
jest.mock('../src/components/data/FetchMovies', () => ({
  fetchMovies: jest.fn(() => {
    return Promise.resolve({
      pages: 1,
      results: [
        {
          id: 111,
          title: 'Scarface',
          original_title: 'Scarface',
          overview:
            'After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.',
          release_date: '1983-12-09',
          original_language: 'en',
          adult: false,
          backdrop_path: '/cCvp5Sni75agCtyJkNOMapORUQV.jpg',
          genre_ids: [28, 80, 18],
          popularity: 83.267,
          poster_path: '/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg',
          video: false,
          vote_average: 8.2,
          vote_count: 10919
        },
        {
          id: 116776,
          title: 'Dragon Ball: Mystical Adventure',
          original_title: 'ドラゴンボール 魔訶不思議大冒険',
          overview:
            "Master Roshi has succeeded at the one mission he valued most: to train Goku and Krillin to become ultimate fighters. So, he arranges for them to test their mettle at a competition hosted by Emperor Chiaotzu. Not everyone's playing by the rules, however, as a member of the ruler's household schemes to use the Dragonballs to extort money and power from the royal.",
          release_date: '1988-07-09',
          original_language: 'ja',
          adult: false,
          backdrop_path: null,
          genre_ids: [28, 16],
          popularity: 436.387,
          poster_path: '/5aXG0B3TYTpQsodXzvYCkKQfpB1.jpg',
          video: false,
          vote_average: 6.8,
          vote_count: 223
        },
        {
          id: 10515,
          title: 'Castle in the Sky',
          original_title: '天空の城ラピュタ',
          overview:
            'A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.',
          release_date: '1986-08-02',
          original_language: 'ja',
          adult: false,
          backdrop_path: '/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg',
          genre_ids: [12, 14, 16, 28, 10751, 10749],
          popularity: 45.348,
          poster_path: '/41XxSsJc5OrulP0m7TrrUeO2hoz.jpg',
          video: false,
          vote_average: 8,
          vote_count: 3805
        },
        {
          id: 679,
          title: 'Aliens',
          original_title: 'Aliens',
          overview:
            "When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story—all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
          release_date: '1986-07-18',
          original_language: 'en',
          adult: false,
          backdrop_path: '/jMBpJFRtrtIXymer93XLavPwI3P.jpg',
          genre_ids: [28, 53, 878],
          popularity: 115.975,
          poster_path: null,
          video: false,
          vote_average: 7.9,
          vote_count: 8874
        }
      ],
      total_pages: 2,
      total_results: 4
    });
  }),
  allGenres: jest.fn(() => {
    return Promise.resolve({
      genres: [
        {
          id: 1,
          name: 'Action'
        },
        {
          id: 2,
          name: 'Romance'
        }
      ]
    });
  })
}));

//Interface to specify types
type LinkProps = {
  to: string;
  children: React.ReactNode;
};

//Mock for component Link
jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof import('react-router-dom')>('react-router-dom'),
  Link: ({ to, children }: LinkProps) => <a href={to}>{children}</a>,
  useHistory: () => history
}));

// Mock for window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true
});

describe('Movies', () => {
  test('renders movie cards', async () => {
    render(
      <MovieProvider>
        <Movies sortByOption="popularity.desc" genres={[]} />
      </MovieProvider>
    );

    const firstPage = await screen.findByText('1');
    fireEvent.click(firstPage);

    await waitFor(() => {
      expect(screen.getByText('Scarface')).toBeInTheDocument();
    });
  });
  test('request movies according to the page selected', async () => {
    render(
      <MovieProvider>
        <Movies sortByOption="popularity.desc" />
      </MovieProvider>
    );

    const firstPage = await screen.findByText('1');
    const secondPage = await screen.findByText('2');

    fireEvent.click(firstPage);
    fireEvent.click(secondPage);

    await waitFor(() => {
      expect(fetchMovies).toHaveBeenCalledWith(2, 'popularity.desc', undefined);
    });
  });
});
