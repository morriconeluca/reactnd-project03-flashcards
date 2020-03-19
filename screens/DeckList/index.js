import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

const DeckList = ({decks}) => {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(decks)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  decks: state
});

export default connect(mapStateToProps)(DeckList);