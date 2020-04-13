import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Quiz = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <Text>Quiz</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

export default connect()(Quiz);