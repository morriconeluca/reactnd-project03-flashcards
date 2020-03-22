import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {handleCreateDeck} from '../../actions';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  Keyboard,
  StyleSheet
} from 'react-native';

import Input from '../../components/Input';
import MDButton from '../../components';

const NewDeck = ({dispatch}) => {
  const [title, setTitle] = useState('');
  const navigation = useNavigation();

  const onChangeText = text => {
    setTitle(text);
  };

  const onPress = () => {
    dispatch(handleCreateDeck(title));
    setTitle('');
    Keyboard.dismiss();
    navigation.navigate('DeckList');
  };

  return (
    <SafeAreaView style={styles.flex}>
      <KeyboardAvoidingView style={styles.container}
        behavior="position"
        enabled
      >
        <Text style={styles.h1}>What is the title of your new deck?</Text>
        <Input
          value={title}
          onChangeText={onChangeText}
        />
        <MDButton onPress={onPress}>Submit</MDButton>
      </KeyboardAvoidingView>
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

export default connect()(NewDeck);