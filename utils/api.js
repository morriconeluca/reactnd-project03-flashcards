import {AsyncStorage} from 'react-native';

import {FLASHCARDS_STORAGE_KEY, formatDecksResults} from './helpers';

// Return all of the decks along with their titles, questions, and answers.
export const getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
    return formatDecksResults(decks);
  } catch (error) {
    console.log(error);
  }
}

// Add title to a new deck.
export const saveDeckTitle = async title => {
  try {
    await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title
      }
    }));
  } catch (error) {
    console.log(error);
  }
};