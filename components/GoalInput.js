import React from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  // console.log('props call: ', props);
  const [enteredText, setEnteredText] = React.useState('');

  function getTextHandler(enteredText) {
    setEnteredText(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={enteredText}
          onChangeText={getTextHandler}
          placeholder="Enter text here"
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredText)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
