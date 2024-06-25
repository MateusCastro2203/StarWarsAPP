// Importações necessárias
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/homeScreen';
import DetailsScreen from '../screens/details/detailsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteCharactersScreen from '../screens/favoriteCharacters/favoriteCharactersScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 20, textTransform: 'uppercase'},
        tabBarStyle: {backgroundColor: '#272B30'},
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteCharactersScreen} />
    </Tab.Navigator>
  );
}

export default  function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AppTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}