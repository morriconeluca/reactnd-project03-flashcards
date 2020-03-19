import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getDecks, saveDeckTitle} from './utils/api';

export default function App() {
  useEffect(() => {
    getDecks().then(() => {
      saveDeckTitle('Python').then(() => {
        getDecks().then(decks => {
          console.log(decks);
        });
      })
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
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
