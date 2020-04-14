import React, {useRef, useEffect} from 'react';
import {Animated, View, Text, Platform, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import CPTouchable from '../CPTouchable';

const DeckListItem = ({deck}) => {
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

  const {title, questions} = deck;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Deck', {title});
  };

  return (
    <Animated.View
      style={{opacity: fade}}
    >
      <CPTouchable onPress={onPress}>
        <View style={styles.item}>
          <View style={styles.flex}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.details}>{`${questions.length} cards`}</Text>
          </View>
          <Ionicons
            name={Platform.select({
              android: 'md-arrow-forward',
              ios: 'ios-arrow-forward'
            })}
            size={24}
            color="#212121"
          />
        </View>
      </CPTouchable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  details: {
    color: '#9e9e9e'
  },
  flex: {
    flex: 1
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 16
  },
  title: {
    color: '#212121',
    fontSize: 24
  }
});

const mapStateToProps = (state, {id}) => ({
  deck: state.decks[id]
});

export default connect(mapStateToProps)(DeckListItem);