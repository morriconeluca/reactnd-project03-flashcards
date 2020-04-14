import React from 'react';
import {connect} from 'react-redux';
import {Alert, SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CPButton from '../../components/CPButton';

const Deck = ({deck}) => {
  const {title, questions} = deck;
  const navigation = useNavigation();

  const addCard = () => {
    navigation.navigate('NewCard', {title});
  };

  const startQuiz = () => {
    if (questions.length) {
      navigation.navigate('Quiz', {title});
    } else {
      Alert.alert(
        'Sorry!',
        'There are no questions yet.'
      );
    }
  };

  const deleteDeck = () => {
    navigation.navigate('DeckList', {deckToDelete: title});
  };

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.h1}>{title}</Text>
          <Text style={styles.details}>{questions.length} cards</Text>
        </View>
        <View>
          <CPButton
            onPress={addCard}
          >
            Add Card
          </CPButton>
          <CPButton
            onPress={startQuiz}
          >
            Start Quiz
          </CPButton>
          <CPButton
            onPress={deleteDeck}
            backgroundColor="#e0e0e0"
            color="#2962ff"
          >
            Delete Deck
          </CPButton>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  flex: {
    flex: 1
  },
  h1: {
    color: '#212121',
    fontSize: 32,
    marginVertical: 8,
    textAlign: 'center'
  }
});

const mapStateToProps = (state, {route}) => ({
  deck: state.decks[route.params.title]
})

export default connect(mapStateToProps)(Deck);