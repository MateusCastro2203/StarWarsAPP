// Importações necessárias
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/homeScreen';
import DetailsScreen from '../screens/details/detailsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteCharactersScreen from '../screens/favoriteCharacters/favoriteCharactersScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 20, textTransform: 'uppercase'},
        tabBarStyle: {backgroundColor: '#272B30'},
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Favorite" component={FavoriteCharactersScreen} />
    </Tab.Navigator>
  );
}
