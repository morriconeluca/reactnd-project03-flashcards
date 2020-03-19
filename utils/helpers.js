import {AsyncStorage} from 'react-native';

export const FLASHCARDS_STORAGE_KEY = '@flashcards_Storage_Key';

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

const storeDummyData = async () => {
  try {
    // AsyncStorage.setItem returns null everytime but it is enough to resolve the promise
    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
  } catch (error) {
    console.log(error);
  }
}

export const formatDecksResults = decks => {
  return decks !== null ? JSON.parse(decks) : storeDummyData();
}