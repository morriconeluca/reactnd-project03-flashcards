import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {handleGetDecks} from './actions';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Deck from './screens/Deck';

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLoading(false);
      unsubscribe();
    });

    store.dispatch(handleGetDecks());
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.middle}>
        <ActivityIndicator size="large" color="#1c73b4" />
      </SafeAreaView>
    );
  }

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

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    justifyContent: 'center'
  }
});