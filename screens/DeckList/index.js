import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';

import DeckListItem from '../../components/DeckListItem';

const DeckList = ({decks}) => {
  if (Object.keys(decks).length === 0 && decks.constructor === Object) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>No decks yet!</Text>
      </SafeAreaView>
    );
  }

  decks = Object.keys(decks).map(title => {
    return decks[title];
  });

  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        data={decks}
        renderItem={({item}) => <DeckListItem id={item.title}/>}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  flex: {
    flex: 1
  },
  h1: {
    color: '#212121',
    fontSize: 32,
    marginVertical: 8,
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  decks: state
});

export default connect(mapStateToProps)(DeckList);