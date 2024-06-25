/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation';

function App(): React.JSX.Element {

  return (
    <NavigationContainer >
        <SafeAreaView style={styles.fullScreen}>
        <HomeStack />
        </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#272B30',
  },
});

export default App;
