import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const Deck = ({deck}) => {
  return (
    <View>
      <Text>Hello {deck.title}!</Text>
    </View>
  );
};

const mapStateToProps = (state, {route}) => ({
  deck: state[route.params.title]
})

export default connect(mapStateToProps)(Deck);