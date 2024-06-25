import {create} from 'zustand';
import {Character, Film} from '../types/index';

interface StarWarsCharacter {
  character: Character[];
  favoriteCharacter: Character[];
  addFavoriteCharacter: (character: Character) => void;
  removeFavoriteCharacter: (character: Character) => void;
  fetchCharacter: () => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
//   films: Film;
//   fetchFilmsByCharacter: (id: number) => Promise<void>;
}

export const useStarWarsStore = create<StarWarsCharacter>(set => ({
  character: [],
  favoriteCharacter: [],
  addFavoriteCharacter: character =>
    set(state => ({
      favoriteCharacter: [...state.favoriteCharacter, character],
    })),
  removeFavoriteCharacter: character =>
    set(state => ({
      favoriteCharacter: state.favoriteCharacter.filter(
        fav => fav.name !== character.name,
      ),
    })),
  fetchCharacter: async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    set({character: data.results});
  },
  fetchCharacterById: async id => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    set({character: [data]});
  },
//   films: [],
//   fetchFilmsByCharacter: async id => {
//     const response = await fetch(`https://swapi.dev/api/people/${id}`);
//     const data = await response.json();
//     const films = await Promise.all(
//       data.films.map(async (film: string) => {
//         const response = await fetch(film);
//         return response.json();
//       }),
//     );
//     set({films});
//   },
}));
