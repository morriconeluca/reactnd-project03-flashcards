import React, {useRef, useEffect} from 'react';

import {Animated, View, Text, StyleSheet} from 'react-native';
import CPButton from '../../CPButton';

const Answer = ({
  questions,
  currentIndex,
  points,
  setPoints,
  setCurrentIndex,
  setAsking}) => {

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

  const nextQuestion = () => {
    setAsking(true);
    setCurrentIndex(currentIndex + 1);
  };

  const addPoint = () => {
    setPoints(points + 1);
    nextQuestion();
  };

  const backToQuestion = () => {
    setAsking(true);
  };

  return (
    <Animated.View
      style={[styles.container, {opacity: fade}]}
    >
      <View>
        <Text style={styles.details}>
          Answer: {currentIndex + 1}/{questions.length}
        </Text>
        <Text style={styles.h1}>{questions[currentIndex].answer}</Text>
      </View>
      <View>
        <CPButton
          onPress={addPoint}
          backgroundColor="#2e7d32"
        >
          Correct
        </CPButton>
        <CPButton
          onPress={nextQuestion}
          backgroundColor="#c62828"
        >
          Incorrect
        </CPButton>
        <CPButton
          onPress={backToQuestion}
          backgroundColor="#e0e0e0"
          color="#2962ff"
        >
          Question
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

export default Answer;