import React, {useState} from 'react';
import {connect} from 'react-redux';

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Question from '../../components/Quiz/Question';
import Answer from '../../components/Quiz/Answer';
import Results from '../../components/Quiz/Results';

const Quiz = ({deck}) => {
  const {title, questions} = deck;
  const [asking, setAsking] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView contentContainerStyle={styles.flex}>
        {
          currentIndex < questions.length && asking
            ? <Question
                questions={questions}
                currentIndex={currentIndex}
                setAsking={setAsking}
              />
            : currentIndex < questions.length
              ? <Answer
                  questions={questions}
                  currentIndex={currentIndex}
                  points={points}
                  setPoints={setPoints}
                  setCurrentIndex={setCurrentIndex}
                  setAsking={setAsking}
                />
              : <Results
                  questions={questions}
                  points={points}
                  setPoints={setPoints}
                  setCurrentIndex={setCurrentIndex}
                  setAsking={setAsking}
                  title={title}
                />
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

const mapStateToProps = (state, {route}) => ({
  deck: state.decks[route.params.title]
})

export default connect(mapStateToProps)(Quiz);