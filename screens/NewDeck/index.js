import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {handleCreateDeck} from '../../actions/shared';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  Keyboard,
  StyleSheet
} from 'react-native';

import Input from '../../components/Input';
import MDButton from '../../components';

const NewDeck = ({dispatch, loading, error}) => {
  const [title, setTitle] = useState('');
  const navigation = useNavigation();

  const onChangeText = text => {
    setTitle(text);
  };

  const onPress = () => {
    const t = title.trim();
    if (t) {
      dispatch(handleCreateDeck(t));
      setTitle('');
      Keyboard.dismiss();
      navigation.navigate('DeckList');
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
        <MDButton onPress={onPress}>Submit</MDButton>
        <Text>{error}</Text>
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
  loading: state.status.loading,
  error: state.status.error
});

export default connect(mapStateToProps)(NewDeck);