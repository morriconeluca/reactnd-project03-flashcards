import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import styles from '../../styles';

const NewDeck = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>New Deck!</Text>
    </SafeAreaView>
  );
};

export default connect()(NewDeck);