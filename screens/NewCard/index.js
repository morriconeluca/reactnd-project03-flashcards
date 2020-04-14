import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {handleAddCard} from '../../actions/shared';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  Keyboard,
  Alert,
  StyleSheet
} from 'react-native';

import Input from '../../components/Input';
import CPButton from '../../components/CPButton';
import ErrorAlert from '../../components/ErrorAlert';

const NewCard = ({title, loading, dispatch}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigation = useNavigation();

  const onChangeQuestion = text => {
    setQuestion(text);
  };

  const onChangeAnswer = text => {
    setAnswer(text);
  };

  const onPress = () => {
    const q = question.trim();
    const a = answer.trim();
    if (q && a) {
      Keyboard.dismiss();
      dispatch(handleAddCard(title, {
        question: q,
        answer: a
      }));
    } else {
      Alert.alert(
        'Warning',
        'Please, insert a valid queastion and answer.'
      )
    }
  };

  return (
    <SafeAreaView style={styles.flex}>
      <KeyboardAvoidingView style={styles.container}
        behavior="position"
        enabled
      >
        <Text style={styles.h1}>Add a new card</Text>
        <Input
          value={question}
          onChangeText={onChangeQuestion}
          placeholder="Question"
        />
        <Input
          value={answer}
          onChangeText={onChangeAnswer}
          placeholder="Answer"
        />
        <CPButton onPress={onPress} loading={loading}>Create Card</CPButton>
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

const mapStateToProps = (state, {route}) => ({
  title: route.params.title,
  loading: state.status.loading,
  error: state.status.error
});

export default connect(mapStateToProps)(NewCard);