import React, {useRef, useEffect} from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CPButton from '../../CPButton';

const Results = ({
  questions,
  points,
  setPoints,
  setCurrentIndex,
  setAsking,
  title}) => {

  const fade = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 300
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 300
    }).start();
  };

  useEffect(() => {
    fadeIn();
    return () => {
      fadeOut();
    };
  }, []);

  const navigation = useNavigation();

  const restartQuiz = () => {
    setCurrentIndex(0);
    setPoints(0);
    setAsking(true);
  };

  const endQuiz = () => {
    navigation.navigate('Deck', {title});
  };

  return (
    <Animated.View
      style={[styles.container, {opacity: fade}]}
    >
      <View>
        <Text style={styles.h1}>
          You answered {
            (points / questions.length * 100).toFixed(2)
          }% of the questions correctly
        </Text>
      </View>
      <View>
        <CPButton
          onPress={restartQuiz}
        >
          Restart Quiz
        </CPButton>
        <CPButton
          onPress={endQuiz}
        >
          Back to Deck
        </CPButton>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 16
  },
  details: {
    color: '#9e9e9e',
    fontSize: 24,
    marginVertical: 8,
    textAlign: 'center'
  },
  h1: {
    color: '#212121',
    fontSize: 32,
    marginVertical: 8,
    textAlign: 'center'
  }
});

export default Results;