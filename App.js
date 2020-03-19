import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {handleGetDecks} from './actions';
import {StyleSheet, Text, View} from 'react-native';

import DeckList from './screens/DeckList';


export default function App() {
  useEffect(() => {
    store.dispatch(handleGetDecks());
  }, []);

  return (
    <Provider store={store}>
      <DeckList />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
