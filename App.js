import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Deck from './screens/Deck';
import NewCard from './screens/NewCard';
import Quiz from './screens/Quiz';

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Flashcards'}}
          />
          <Stack.Screen
            name="Deck"
            component={Deck}
            options={({route}) => ({
              title: `Deck: "${route.params.title}"`
            })}
          />
          <Stack.Screen
            name="NewCard"
            component={NewCard}
            options={({route}) => ({
              title: `Add a new card to "${route.params.title}" deck`
            })}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={({route}) => ({
              title: `Quiz for: "${route.params.title}"`
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};