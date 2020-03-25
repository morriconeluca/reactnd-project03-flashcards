import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {handleCreateDeck} from '../../actions/shared';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  Keyboard,
  Alert,
  StyleSheet
} from 'react-native';

import Input from '../../components/Input';
import MDButton from '../../components/MDButton';
import ErrorAlert from '../../components/ErrorAlert';

const NewDeck = ({decks, loading, dispatch}) => {
  const [title, setTitle] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setTitle('');
    navigation.navigate('DeckList');
  }, [decks]);

  const onChangeText = text => {
    setTitle(text);
  };

  const onPress = () => {
    const t = title.trim();
    if (t) {
      Keyboard.dismiss();
      dispatch(handleCreateDeck(t))
    } else {
      Alert.alert(
        'Warning',
        'Please, insert a valid title.',
        [],
        {cancelable: true}
      )
    }
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
        <MDButton onPress={onPress} loading={loading} prova={() => {console.log('mounted');}}>Submit</MDButton>
        <ErrorAlert />
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

const mapStateToProps = state => ({
  decks: state.decks,
  loading: state.status.loading,
  error: state.status.error
});

export default connect(mapStateToProps)(NewDeck);