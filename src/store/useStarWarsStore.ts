import {create} from 'zustand';
import {Character, Film} from '../types/index';

interface StarWarsCharacter {
  characters: Character[];
  character: Character;
  favoriteCharacter: Character[];
  addFavoriteCharacter: (character: Character) => void;
  removeFavoriteCharacter: (character: Character) => void;
  fetchCharacter: (id:number) => Promise<void>;
  fetchCharacterById: (url: string) => Promise<void>;
//   films: Film;
//   fetchFilmsByCharacter: (id: number) => Promise<void>;
}

export const useStarWarsStore = create<StarWarsCharacter>(set => ({
  characters: [],
  character: {
      name: '',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '',
      edited: '',
      url: ''
  },
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
  fetchCharacter: async id => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${id}`);
    const data = await response.json();
    set(state => ({characters: [...state.characters, ...data.results]}));
  },
  fetchCharacterById: async url => {
    const response = await fetch(url);
    const data = await response.json();
    set({character: data});
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
