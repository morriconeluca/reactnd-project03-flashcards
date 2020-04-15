import {AsyncStorage} from 'react-native';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

export const FLASHCARDS_STORAGE_KEY = '@flashcards_Storage_Key';

const FLASHCARDS_NOTIFICATION_KEY = '@flashcards_Notification_Key';

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

export const clearLocalNotification = async () => {
  try {
    await AsyncStorage.removeItem(FLASHCARDS_NOTIFICATION_KEY);
    Notifications.cancelAllScheduledNotificationsAsync();
  } catch(error) {
    console.log(error);
  }
}

const createNotification = () => ({
  title: "You haven't studied today!",
  body: "👋 don't forget to complete at least one quiz!",
  ios: {
    sound: true
  },
  android: {
    sound: true
  }
});

export const setLocalNotification = async () => {
  try {
    let data = await AsyncStorage.getItem(FLASHCARDS_NOTIFICATION_KEY);
    if (JSON.parse(data) === null) {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status === 'granted') {
        await Notifications.cancelAllScheduledNotificationsAsync();

        await Notifications.scheduleLocalNotificationAsync(
          createNotification(),
          {
            time: (new Date()).getTime() + 86400000,
            repeat: 'day',
          }
        );

        try {
          await AsyncStorage.setItem(
            FLASHCARDS_NOTIFICATION_KEY,
            JSON.stringify(true)
          );
        } catch(error) {
          console.log(error);
        }
      }
    }
  } catch(error) {
    console.log(error);
  }
};