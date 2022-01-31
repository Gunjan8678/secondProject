import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredText, setEnteredText] = React.useState('');

  function getTextHandler(enteredText) {
    setEnteredText(enteredText);
  }

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        value={enteredText}
        onChangeText={getTextHandler}
        placeholder="Enter text here"
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredText)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
  },
});

export default GoalInput;
