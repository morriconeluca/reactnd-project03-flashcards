import React from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';
import {clearError} from '../../actions/status';

const ErrorAlert = ({error, dispatch}) => {
  const onPress = () => {
    dispatch(clearError());
  };

  return (
    <View>
      <Text>
        {error && Alert.alert(
          'Sorry:',
          error,
          [
            {
              text: 'I undestand', onPress
            }
          ],
          {cancelable: false}
        )}
      </Text>
    </View>
  );
};

const mapStateToProps = state => ({
  error: state.status.error
});

export default connect(mapStateToProps)(ErrorAlert);