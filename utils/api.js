import {AsyncStorage} from 'react-native';

import {FLASHCARDS_STORAGE_KEY, dummyData} from './helpers';

export const storeData = async () => {
  try {
    // AsyncStorage.setItem returns null everytime but it is enough to resolve the promise
    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData));
  } catch (error) {
    console.log(error);
  }
}

export const getData = async () => {
  try {
    return await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
  } catch (error) {
    console.log(error);
  }
}