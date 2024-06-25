import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
interface ButtonProps {
  isFavorite: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({isFavorite, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isFavorite ? styles.favoriteButton : styles.addButton,
      ]}>
      <Text style={styles.text}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
