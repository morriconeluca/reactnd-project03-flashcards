import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import styles from '../../styles';

const DeckList = ({decks}) => {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(decks)}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  decks: state
});

export default connect(mapStateToProps)(DeckList);