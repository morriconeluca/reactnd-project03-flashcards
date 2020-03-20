import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {handleGetDecks} from './actions';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import styles from './styles';

import DeckList from './screens/DeckList';


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
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#1c73b4" />
      </SafeAreaView>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <DeckList />
      </SafeAreaView>
    </Provider>
  );
}