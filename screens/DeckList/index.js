import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import styles from '../../styles';

const DeckList = ({decks}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(decks)}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  decks: state
});

export default connect(mapStateToProps)(DeckList);