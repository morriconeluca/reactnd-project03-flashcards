import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {storeData, getData} from './utils/api';

export default function App() {
  useEffect(() => {
    storeData().then(() => {
      getData().then(data => {
        console.log(JSON.parse(data));
      });
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
