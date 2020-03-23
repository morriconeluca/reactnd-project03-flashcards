import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Deck from './screens/Deck';

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
            options={{title: 'Deck'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};