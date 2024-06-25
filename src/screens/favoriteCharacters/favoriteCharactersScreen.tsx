import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useStarWarsStore} from '../../store/useStarWarsStore.ts';
import CharactersTitle from '../../components/characters/Characters.tsx';
import {styles} from './styles.ts';
import {useNavigation} from '@react-navigation/native';

const FavoriteCharactersScreen = () => {
  const {favoriteCharacter, fetchCharacterById, fetchFilmsByCharacter} =
    useStarWarsStore();

  const navigation = useNavigation();

  const handlePress = (url: string) => {
    navigation.navigate('Details');
    fetchCharacterById(url);
    fetchFilmsByCharacter(url);
  };

  return (
    <View style={styles.fullScreen}>
      {favoriteCharacter.length > 0 ? (
        <View>
          <Text style={styles.title}>Star Wars Favorites</Text>
          <FlatList
            data={favoriteCharacter}
            renderItem={({item}) => (
              <CharactersTitle
                text={item.name}
                onPress={() => handlePress(item.url)}
              />
            )}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      ) : (
        <Text style={styles.title}>No favorites yet</Text>
      )}
    </View>
  );
};

export default FavoriteCharactersScreen;
