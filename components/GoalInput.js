import React from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  // console.log('props call: ', props);
  const [enteredText, setEnteredText] = React.useState('');

  function getTextHandler(enteredText) {
    console.log('text ', enteredText);
    setEnteredText(enteredText);
  }
  const addGoalAdditionHandler = () => {
    props.onAddGoal(enteredText);
    setEnteredText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={enteredText}
          onChangeText={getTextHandler}
          placeholder="Enter text here"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalAdditionHandler} />
          </View>
        </View>
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
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
