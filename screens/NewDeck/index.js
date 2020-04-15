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
  Platform,
  StyleSheet
} from 'react-native';

import Input from '../../components/Input';
import CPButton from '../../components/CPButton';
import ErrorAlert from '../../components/ErrorAlert';

const NewDeck = ({decks, loading, dispatch}) => {
  const [title, setTitle] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      const t = title.trim();
      setTitle('');
      navigation.navigate('Deck', {title: t});
    }
  }, [decks]);

  const onChangeText = text => {
    setTitle(text);
  };

  const onPress = () => {
    const t = title.trim();
    if (t) {
      Keyboard.dismiss();
      dispatch(handleCreateDeck(t));
    } else {
      Alert.alert(
        'Warning',
        'Please, insert a valid title.'
      )
    }
  };

  return (
    <SafeAreaView style={styles.flex}>
      <KeyboardAvoidingView style={styles.container}
        behavior="height"
        enabled
      >
        <Text style={styles.h1}>What is the title of your new deck?</Text>
        <Input
          value={title}
          onChangeText={onChangeText}
          placeholder="Deck Title"
        />
        <CPButton onPress={onPress} loading={loading}>Create Deck</CPButton>
        <ErrorAlert />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingBottom: 96
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