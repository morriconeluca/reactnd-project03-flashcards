import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  FlatList,
  Alert,
  StyleSheet
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {handleGetDecks, handleDeleteDeck} from '../../actions/shared';

import DeckListItem from '../../components/DeckListItem';

const DeckList = ({decks, loading, dispatch, route}) => {
  useEffect(() => {
    dispatch(handleGetDecks());
  }, []);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (route.params && route.params.deckToDelete) {
        const {deckToDelete} = route.params;

        Alert.alert(
          `Are you sure you want to delete the ${deckToDelete} deck?`,
          'This item will be deleted immediately. You can\'t undo this action.',
          [
            {
              text: 'Cancel', onPress: () => {
                navigation.setParams({deckToDelete: null});
              }
            },
            {
              text: 'Delete', onPress: () => {
                dispatch(handleDeleteDeck(deckToDelete));
                navigation.setParams({deckToDelete: null});
              }
            }
          ],
          {cancelable: false}
        );
      }
    }, [route])
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#1c73b4" />
      </SafeAreaView>
    );
  }

  if (Object.keys(decks).length === 0 && decks.constructor === Object) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>No decks yet!</Text>
      </SafeAreaView>
    );
  }

  decks = Object.keys(decks)
    .sort()
    .map(title => {
    return decks[title];
  });

  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        data={decks}
        renderItem={({item}) => <DeckListItem id={item.title}/>}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
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

const mapStateToProps = state => ({
  decks: state.decks,
  loading: state.status.loading
});

export default connect(mapStateToProps)(DeckList);