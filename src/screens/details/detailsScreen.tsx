import React from 'react';
import {View, Text} from 'react-native';
import {useStarWarsStore} from '../../store/useStarWarsStore.ts';
import {styles} from './styles.ts';
import {Film} from '../../types/starWarsTypes.ts';

const CharacterDetail = (label: string, value: string) => (
  <Text style={styles.description}>
    <Text style={styles.descriptionBold}>{label}:</Text> {value}
  </Text>
);

const FilmList = (films: Film[]) => (
  <View>
    <Text style={[styles.description, styles.descriptionBold]}>Films</Text>
    {films.map(film => (
      <Text key={film.title} style={styles.description}>
        {film.title}
      </Text>
    ))}
  </View>
);

const DetailsScreen: React.FC = () => {
  const {character, films} = useStarWarsStore();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      {CharacterDetail('Height', character.height)}
      {CharacterDetail('Mass', character.mass)}
      {CharacterDetail('Hair Color', character.hair_color)}
      {CharacterDetail('Birth Year', character.birth_year)}
      {FilmList(films)}
    </View>
  );
};

export default DetailsScreen;
