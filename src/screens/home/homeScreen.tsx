import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useStarWarsStore} from '../../store/useStarWarsStore.ts';
import CharactersTitle from '../../components/characters/Characters.tsx';
import {styles} from './styles.ts';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {fetchCharacter, fetchCharacterById, fetchFilmsByCharacter} =
    useStarWarsStore();
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    fetchCharacter(page);
  }, [fetchCharacter, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const navigation = useNavigation();

  const handlePress = (url: string) => {
    navigation.navigate('Details');
    fetchCharacterById(url);
    fetchFilmsByCharacter(url);
  };

  return (
    <View style={styles.fullScreen}>
      <Text style={styles.title}>Star Wars APP</Text>
      <FlatList
        data={useStarWarsStore.getState().characters}
        renderItem={({item}) => (
          <CharactersTitle
            text={item.name}
            onPress={() => handlePress(item.url)}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
};

export default HomeScreen;
