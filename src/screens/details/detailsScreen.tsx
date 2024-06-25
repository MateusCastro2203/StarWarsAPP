import React from 'react';
import {View, Text} from 'react-native';
import {useStarWarsStore} from '../../store/useStarWarsStore.ts';
import {styles} from './styles.ts';
import {Film} from '../../types/starWarsTypes.ts';
import Button from '../../components/button/Button.tsx';
import {useNavigation} from '@react-navigation/native';

const CharacterDetail = (label: string, value: string) => (
  <Text style={styles.description}>
    <Text style={styles.descriptionBold}>{label}:</Text> {value}
  </Text>
);

const FilmList = (films: Film[]) => (
  <View style={styles.filmsContainer}>
    <Text style={styles.filmsTitle}>Films</Text>
    {films.map(film => (
      <Text key={film.title} style={styles.description}>
        {film.title}
      </Text>
    ))}
  </View>
);

const DetailsScreen: React.FC = () => {
  const {
    character,
    films,
    addFavoriteCharacter,
    favoriteCharacter,
    removeFavoriteCharacter,
  } = useStarWarsStore();

  const isFavorite = favoriteCharacter.some(fav => fav.name === character.name);
  const navigation = useNavigation();

  const handlePress = () => {
    if (isFavorite) {
      removeFavoriteCharacter(character);
      navigation.navigate('Home');
    } else {
      addFavoriteCharacter(character);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      {CharacterDetail('Height', character.height)}
      {CharacterDetail('Mass', character.mass)}
      {CharacterDetail('Hair Color', character.hair_color)}
      {CharacterDetail('Birth Year', character.birth_year)}
      {FilmList(films)}

      <Button
        isFavorite={isFavorite}
        onPress={() => {
          handlePress();
        }}
      />
    </View>
  );
};

export default DetailsScreen;
