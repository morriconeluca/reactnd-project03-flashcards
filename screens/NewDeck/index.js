import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {handleCreateDeck} from '../../actions';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  Keyboard
} from 'react-native';

import styles from '../../styles';

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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}
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

export default connect()(NewDeck);