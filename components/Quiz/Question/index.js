import React, {useRef, useEffect} from 'react';

import {Animated, View, Text, StyleSheet} from 'react-native';
import CPButton from '../../CPButton';

const Question = ({
  questions,
  currentIndex,
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

  const onPress = () => {
    setAsking(false);
  };

  return (
    <Animated.View
      style={[styles.container, {opacity: fade}]}
    >
      <View>
        <Text style={styles.details}>
          Question: {currentIndex + 1}/{questions.length}
        </Text>
        <Text style={styles.h1}>{questions[currentIndex].question}</Text>
      </View>
      <View>
        <CPButton
          onPress={onPress}
        >
          Answer
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

export default Question;