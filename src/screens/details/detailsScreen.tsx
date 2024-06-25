import React from 'react';
import {View, Text} from 'react-native';
import {useStarWarsStore} from '../../store/useStarWarsStore.ts';
import {styles} from './styles.ts';

const DetailsScreen: React.FC = () => {
  const {character} = useStarWarsStore();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={[styles.description, styles.descriptionBold]}>
        Character description
      </Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionBold}>Birth year:</Text>{' '}
        {character.birth_year}
      </Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionBold}>Gender:</Text> {character.gender}
      </Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionBold}>Height:</Text> {character.height}
      </Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionBold}>Eye color:</Text>{' '}
        {character.eye_color}
      </Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionBold}>Hair color:</Text>{' '}
        {character.hair_color}
      </Text>
      <Text style={styles.description}>
        <Text style={styles.descriptionBold}>Mass:</Text> {character.mass}
      </Text>
    </View>
  );
};

export default DetailsScreen;
