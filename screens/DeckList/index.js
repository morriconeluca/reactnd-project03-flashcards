import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';

import DeckListItem from '../../components/DeckListItem';

const DeckList = ({decks}) => {
  return (
    <SafeAreaView style={styles.flex}>
      <DeckListItem id={decks.React.title} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  decks: state
});

export default connect(mapStateToProps)(DeckList);