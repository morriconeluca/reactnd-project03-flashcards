import {AsyncStorage} from 'react-native';

import {FLASHCARDS_STORAGE_KEY, formatDecksResults} from './helpers';

// Return all of the decks along with their titles, questions, and answers.
export const getDecks = async () => {
  try {
    // Uncomment to clear storage sometimes.
    // await AsyncStorage.clear();
    const decks = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
    return formatDecksResults(decks);
  } catch (error) {
    console.log(error);
  }
}

// Add title to a new deck.
export const saveDeckTitle = async title => {
  try {
    const decks = await getDecks();
    await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      ...decks,
      [title]: {
        title,
        questions: []
      }
    }));
  } catch (error) {
    console.log(error);
  }
};

// Delete deck.
export const deleteDeck = async title => {
  try {
    let decks = await getDecks();
    delete decks[title];
    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
    return decks;
  } catch (error) {
    console.log(error);
  }
};

// Add the card to the cards list for the deck with the associated title.
export const addCardToDeck = async (title, card) => {
  try {
    const decks = await getDecks();
    const deck = decks[title];

    await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      ...decks,
      [title]: {
        questions: [
          ...deck.questions,
          card
        ]
      }
    }));
  } catch (error) {
    console.log(error);
  }
};