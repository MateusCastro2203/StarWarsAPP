import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface CharactersTitleProps {
  text: string;
  onPress: () => void;
}

const CharactersTitle: React.FC<CharactersTitleProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CharactersTitle;
