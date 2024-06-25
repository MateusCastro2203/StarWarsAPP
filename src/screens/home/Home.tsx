import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useStarWarsStore} from '../../store/useStarWarsStore';
import CharactersTitle from '../../components/characters/Characters.tsx';
import {styles} from './styles.ts';

const HomeScreen = () => {
  const {fetchCharacter} = useStarWarsStore();
  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);
  return (
    <View style={styles.fullScreen}>
      <Text style={styles.title}>Star Wars APP</Text>
      <FlatList
        data={useStarWarsStore.getState().character}
        renderItem={({item}) => (
          <CharactersTitle
            text={item.name}
            onPress={() => console.log('Character Pressed')}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default HomeScreen;
